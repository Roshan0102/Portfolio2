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


            // Responsive camera position based on viewport
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 768) {
                // Mobile - move camera much further back to see all text
                camera.position.z = 50;
            } else if (viewportWidth < 1024) {
                // Tablet
                camera.position.z = 35;
            } else {
                // Desktop
                camera.position.z = 25;
            }


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

            // Responsive particle size
            const viewportWidth = window.innerWidth;
            let particleSize: number;
            if (viewportWidth < 768) {
                particleSize = 0.15; // Much larger particles for mobile visibility
            } else if (viewportWidth < 1024) {
                particleSize = 0.10; // Medium for tablets
            } else {
                particleSize = 0.08; // Original size for desktop
            }

            const material = new THREE.PointsMaterial({
                size: particleSize,
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

            // Responsive font size based on viewport width
            const viewportWidth = window.innerWidth;
            let fontSize: number;
            let scaleFactor: number;

            if (viewportWidth < 768) {
                // Mobile devices - much smaller text to fit screen
                fontSize = Math.min(25, viewportWidth * 0.05); // Reduced from 0.08
                scaleFactor = fontSize / 4; // Increased divisor for tighter spacing
            } else if (viewportWidth < 1024) {
                // Tablets
                fontSize = 35; // Reduced from 45
                scaleFactor = fontSize / 7; // Adjusted
            } else {
                // Desktop
                fontSize = 60;
                scaleFactor = fontSize / 10;
            }

            const padding = 10; // Reduced padding for mobile
            const lineHeight = fontSize * 1.2; // Reduced line height for tighter spacing

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


                    // Responsive particle density for better text clarity
                    const density = viewportWidth < 768 ? 0.7 : 0.5;
                    if (Math.random() < density) {
                        points.push({
                            x: (x - canvas.width / 2) / scaleFactor,
                            y: -(y - canvas.height / 2) / scaleFactor,
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
                    // Move unused particles far away and scatter them spherically to avoid "box" look
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const radius = 100 + Math.random() * 100; // Far away radius

                    targetPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                    targetPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                    targetPositions[i * 3 + 2] = radius * Math.cos(phi); // Scatter in all directions
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

            // Animate colors - make text particles vibrant purple-cyan gradient, others invisible
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
                    targetColor = { r: 0, g: 0, b: 0 }; // Completely black/invisible
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
