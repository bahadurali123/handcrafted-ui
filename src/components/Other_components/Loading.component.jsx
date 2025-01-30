import React, { useState, useEffect } from 'react';
import '../../styles/Others/Loading.css';

const LoadingIndicator = ({ size = 100, duration = 1500 }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pathLength, setPathLength] = useState(100); // Initial path length (rounded)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, duration);

        // Animate path length during loading
        const animatePathLength = () => {
            if (isLoading) {
                setPathLength(prevLength => Math.max(prevLength - 1, 0)); // Decrease gradually
                requestAnimationFrame(animatePathLength);
            }
        };

        animatePathLength();

        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, [isLoading, duration]);

    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoadingIndicator;