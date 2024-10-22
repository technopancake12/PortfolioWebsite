import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import screenshot1 from '../../../src/assets/images/Momgif.gif';
import screenshot2 from '../../../src/assets/images/screenshot2.png';
import screenshot3 from '../../../src/assets/images/financeGIF.gif';

const Designs = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['','M', 'y', ' ', 'F', 'i', 'g', 'm', 'a', ' ', 'D', 'e', 's', 'i', 'g', 'n', 's'];

    const screenshotsData = [
        {
            src: screenshot1,
            title: "Subscription Application (Multi Paged and Dynamic)",
            description: "This is a figma design of a 13 page application that would help you organize, discover, and maintain your streaming subscriptions for current or new shows."
        },
        {
            src: screenshot2,
            title: "Real Estate (Static)",
            description: "This is a static 1 page design of a real estate website."
        },{
            src: screenshot3,
            title: "Finance Website (Dynamic)",
            description: "This is a dynamic design of a finance website."
        }
        // Add more screenshots as needed
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className="designs-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={0}
                    />
                </h1>
            </div>
            <div className="screenshots">
                {screenshotsData.map((screenshot, index) => (
                    <div key={index} className="screenshot-item">
                        <img src={screenshot.src} alt={`Design ${index + 1}`} />
                        <div className="description-box">
                            <h2>{screenshot.title}</h2>
                            <p>{screenshot.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Designs;
