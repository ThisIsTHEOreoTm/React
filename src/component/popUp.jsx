import './popUp.css'
import React from 'react';
import { useEffect } from 'react';

const popUp = ({ formData, onClose }) => {
    useEffect(() => {
        const closeOnUserInteraction = () => {
            onClose(); // Close popup
        };

        document.addEventListener('keydown', closeOnUserInteraction);
        document.addEventListener('mousedown', closeOnUserInteraction);

        return () => {
            document.removeEventListener('keydown', closeOnUserInteraction);
            document.removeEventListener('mousedown', closeOnUserInteraction);
        };
    }, [onClose]);

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>🎉 Form Submitted Successfully!</h2>
                <p className="popup-tip">Press any key or click anywhere to close</p>
            </div>
        </div>
    );
};

export default popUp;