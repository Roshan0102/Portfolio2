import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check local storage or system preference
        const isDarkMode = localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage));

        setIsDark(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDark;
        setIsDark(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        // Play a small click sound or vibration? (Just UI change for now)
    };

    return (
        <div className="theme-toggle-container" title="Pull me to switch theme">
            <div className={`wire ${isDark ? 'wire-dark' : ''}`}></div>
            <div
                className={`bulb-container ${isDark ? 'off' : 'on'}`}
                onClick={toggleTheme}
            >
                <div className="bulb-socket">
                    {/* subtle socket ridges */}
                    <div className="socket-ridge"></div>
                    <div className="socket-ridge"></div>
                </div>
                <div className="bulb">
                    <div className="filament"></div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
