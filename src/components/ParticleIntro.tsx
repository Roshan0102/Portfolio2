import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import './ParticleIntro.css';

interface ParticleIntroProps {
    onComplete: () => void;
}

const ParticleIntro: React.FC<ParticleIntroProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const count = 12000;
        let currentState = 'gathering'; // Start in gathering state, not rotating yet

        const init = () => {
            if (!containerRef.current) return;

            // Scene setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000);
            containerRef.current.appendChild(renderer.domElement);

            camera.position.z = 25;

            sceneRef.current = scene;
            cameraRef.current = camera;
            rendererRef.current = renderer;

            createParticles();
            animate();

            // NEW SEQUENCE:
            // Stage 0: Gather particles into sphere (0-1.5s)
            setTimeout(() => {
                gatherToSphere();
            }, 100);

            // Stage 1: "HI" after sphere forms (3.5 seconds total)
            setTimeout(() => {
                morphToText('HI');
            }, 3500);

            // Stage 2: "I'M ROSHAN" after 6 seconds
            setTimeout(() => {
                morphToText("I'M ROSHAN");
            }, 6000);

            // Stage 3: "NICE TO MEET YOU" after 8.5 seconds (3 lines)
            setTimeout(() => {
                morphToText('NICE\nTO MEET\nYOU');
            }, 8500);

            // Complete after showing all three stages
            setTimeout(() => {
                onComplete();
            }, 11500);
        };

        const createParticles = () => {
            if (!sceneRef.current) return;

            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const targetPositions = new Float32Array(count * 3); // Store sphere positions
            const colors = new Float32Array(count * 3);

            const sphericalDistribution = (i: number) => {
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;

                return {
                    x: 8 * Math.cos(theta) * Math.sin(phi),
                    y: 8 * Math.sin(theta) * Math.sin(phi),
                    z: 8 * Math.cos(phi),
                };
            };

            for (let i = 0; i < count; i++) {
                const point = sphericalDistribution(i);

                // Store target sphere positions
                targetPositions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
                targetPositions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
                targetPositions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;

                // Start particles scattered randomly across a large area
                positions[i * 3] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

                // Create cyan to blue gradient based on depth (matches portfolio theme)
                const depth =
                    Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z) / 8;

                // Interpolate between cyan (#06b6d4) and blue (#2563eb)
                const cyan = { r: 0.024, g: 0.714, b: 0.831 };
                const blue = { r: 0.145, g: 0.388, b: 0.922 };

                colors[i * 3] = cyan.r + (blue.r - cyan.r) * depth;
                colors[i * 3 + 1] = cyan.g + (blue.g - cyan.g) * depth;
                colors[i * 3 + 2] = cyan.b + (blue.b - cyan.b) * depth;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            // Store target positions as user data for later animation
            geometry.userData.targetPositions = targetPositions;

            const material = new THREE.PointsMaterial({
                size: 0.08,
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
            });

            if (particlesRef.current) sceneRef.current.remove(particlesRef.current);
            const particles = new THREE.Points(geometry, material);
            particles.rotation.x = 0;
            particles.rotation.y = 0;
            particles.rotation.z = 0;
            sceneRef.current.add(particles);
            particlesRef.current = particles;
        };

        const gatherToSphere = () => {
            if (!particlesRef.current) return;

            const positions = particlesRef.current.geometry.attributes.position.array;
            const targetPositions = particlesRef.current.geometry.userData.targetPositions;

            // Animate each particle to its target sphere position
            for (let i = 0; i < positions.length; i += 3) {
                gsap.to(particlesRef.current.geometry.attributes.position.array, {
                    [i]: targetPositions[i],
                    [i + 1]: targetPositions[i + 1],
                    [i + 2]: targetPositions[i + 2],
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        if (particlesRef.current) {
                            particlesRef.current.geometry.attributes.position.needsUpdate = true;
                        }
                    },
                });
            }

            // After gathering, change state to 'sphere' to enable rotation
            setTimeout(() => {
                currentState = 'sphere';
            }, 1500);
        };

        const createTextPoints = (text: string) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return [];

            const fontSize = 60;
            const padding = 20;
            const lineHeight = fontSize * 1.3;

            // Split text by newline for multi-line support
            const lines = text.split('\n');

            ctx.font = `bold ${fontSize}px Arial`;

            // Calculate canvas dimensions based on longest line
            let maxWidth = 0;
            lines.forEach(line => {
                const metrics = ctx.measureText(line);
                if (metrics.width > maxWidth) maxWidth = metrics.width;
            });

            canvas.width = maxWidth + padding * 2;
            canvas.height = (lines.length * lineHeight) + padding * 2;

            ctx.fillStyle = 'white';
            ctx.font = `bold ${fontSize}px Arial`;
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';

            // Draw each line
            lines.forEach((line, index) => {
                const y = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2 + (index * lineHeight);
                ctx.fillText(line, canvas.width / 2, y);
            });

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            const points: { x: number; y: number }[] = [];
            const threshold = 128;

            for (let i = 0; i < pixels.length; i += 4) {
                if (pixels[i] > threshold) {
                    const x = (i / 4) % canvas.width;
                    const y = Math.floor(i / 4 / canvas.width);

                    if (Math.random() < 0.5) { // Increased from 0.3 for denser text
                        points.push({
                            x: (x - canvas.width / 2) / (fontSize / 10),
                            y: -(y - canvas.height / 2) / (fontSize / 10),
                        });
                    }
                }
            }

            return points;
        };

        const morphToText = (text: string) => {
            if (!particlesRef.current) return;

            currentState = 'text';
            const textPoints = createTextPoints(text);
            const positions = particlesRef.current.geometry.attributes.position.array;
            const targetPositions = new Float32Array(count * 3);

            gsap.to(particlesRef.current.rotation, {
                x: 0,
                y: 0,
                z: 0,
                duration: 0.5,
            });

            for (let i = 0; i < count; i++) {
                if (i < textPoints.length) {
                    // Position for text particles
                    targetPositions[i * 3] = textPoints[i].x;
                    targetPositions[i * 3 + 1] = textPoints[i].y;
                    targetPositions[i * 3 + 2] = 0;
                } else {
                    // Move unused particles far away from camera
                    targetPositions[i * 3] = (Math.random() - 0.5) * 100;
                    targetPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                    targetPositions[i * 3 + 2] = -100; // Far behind
                }
            }

            // Animate positions
            for (let i = 0; i < positions.length; i += 3) {
                gsap.to(particlesRef.current.geometry.attributes.position.array, {
                    [i]: targetPositions[i],
                    [i + 1]: targetPositions[i + 1],
                    [i + 2]: targetPositions[i + 2],
                    duration: 2,
                    ease: 'power2.inOut',
                    onUpdate: () => {
                        if (particlesRef.current) {
                            particlesRef.current.geometry.attributes.position.needsUpdate = true;
                        }
                    },
                });
            }

            // Animate colors - make text particles vibrant purple-cyan gradient, others dim
            for (let i = 0; i < count; i++) {
                let targetColor;
                if (i < textPoints.length) {
                    // Create gradient effect across text particles
                    const gradientPosition = i / textPoints.length;
                    // Interpolate between purple (#9333ea) and cyan (#06b6d4)
                    const purple = { r: 0.576, g: 0.2, b: 0.918 };
                    const cyan = { r: 0.024, g: 0.714, b: 0.831 };

                    targetColor = {
                        r: purple.r + (cyan.r - purple.r) * gradientPosition,
                        g: purple.g + (cyan.g - purple.g) * gradientPosition,
                        b: purple.b + (cyan.b - purple.b) * gradientPosition
                    };
                } else {
                    targetColor = { r: 0.1, g: 0.1, b: 0.15 }; // Very dim for background
                }

                gsap.to(particlesRef.current.geometry.attributes.color.array, {
                    [i * 3]: targetColor.r,
                    [i * 3 + 1]: targetColor.g,
                    [i * 3 + 2]: targetColor.b,
                    duration: 2,
                    ease: 'power2.inOut',
                    onUpdate: () => {
                        if (particlesRef.current) {
                            particlesRef.current.geometry.attributes.color.needsUpdate = true;
                        }
                    },
                });
            }
        };


        const animate = () => {
            if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

            animationFrameRef.current = requestAnimationFrame(animate);

            if (currentState === 'sphere' && particlesRef.current) {
                particlesRef.current.rotation.y += 0.002;
            }

            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };

        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;

            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        init();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            // Capture ref value to avoid React hooks warning
            const container = containerRef.current;
            if (rendererRef.current && container) {
                container.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
        };
    }, [onComplete]);

    return <div ref={containerRef} className="particle-intro-container" />;
};

export default ParticleIntro;
