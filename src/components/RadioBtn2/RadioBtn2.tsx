import { useEffect, useState } from 'react'
import './RadioBtn2.scss';

export const RadioBtn2 = () => {
    const [chosen, setChosen] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (chosen) {
            setAnimate(true);
            setTimeout(() => {
                setChosen(false);
                setAnimate(false);
            }, 5000);
        }
    }, [chosen]);

    return (
        <>
            <div className={`radioBtnNew ${chosen ? "newColor" : ""} ${animate ? "animate" : ""}`}>
                <input type="radio" className="newRadio" id="newRadio-1" name="1group"
                    onClick={() => {
                        setChosen(true);
                    }} />
                <label htmlFor="newRadio-1">RadioBtn2</label>
            </div>
        </>
    )
}