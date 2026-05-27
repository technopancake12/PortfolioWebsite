import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import screenshot1 from '../../assets/images/Momgif.gif';
import screenshot2 from '../../assets/images/screenshot2.png';
import screenshot3 from '../../assets/images/financeGIF.gif';

const designsData = [
    {
        src: screenshot1,
        title: "Subscription App",
        type: "Multi-Page · Dynamic",
        tools: ["Figma"],
        description: "A 13-page dynamic prototype for managing, discovering, and organizing streaming subscriptions. Tracks current shows, suggests new content, and surfaces subscription costs in one centralized view."
    },
    {
        src: screenshot2,
        title: "Real Estate Landing Page",
        type: "Single Page · Static",
        tools: ["Figma"],
        description: "A clean, high-conversion static landing page for a real estate agency. Emphasizes property listings, agent credibility, and a simple inquiry flow with a modern property-showcase layout."
    },
    {
        src: screenshot3,
        title: "Finance Dashboard",
        type: "Multi-Page · Dynamic",
        tools: ["Figma"],
        description: "A dynamic finance web app prototype featuring spending analytics, budget tracking, and account overview dashboards. Designed for clarity and quick data comprehension."
    }
];

const Designs = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['', 'M', 'y', ' ', 'D', 'e', 's', 'i', 'g', 'n', 's'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
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
                <p className="designs-intro">
                    UI/UX prototypes built in Figma — from static landing pages to fully interactive multi-screen flows.
                </p>
            </div>

            <div className="designs-grid">
                {designsData.map((design, index) => (
                    <div key={index} className="design-card">
                        <div className="design-media">
                            <img src={design.src} alt={design.title} />
                            <div className="media-overlay">
                                <span className="overlay-label">Preview</span>
                            </div>
                        </div>
                        <div className="design-body">
                            <div className="design-meta">
                                <span className="design-type">{design.type}</span>
                                <div className="design-tools">
                                    {design.tools.map((tool, i) => (
                                        <span key={i} className="tool-tag">{tool}</span>
                                    ))}
                                </div>
                            </div>
                            <h2>{design.title}</h2>
                            <p>{design.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Designs;
