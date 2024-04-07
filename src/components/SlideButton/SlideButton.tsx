import { useState } from 'react';
import './SlideButton.css';

const SlideButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleSlide = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`slide-button ${isOn ? 'on' : 'off'}`} onClick={handleSlide}>
            <div className="slider" />
        </div>
    );
};

export default SlideButton;