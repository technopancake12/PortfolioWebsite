import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['','M', 'y', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];

    const videosData = [
        {
            id: 'I9sJmIZxLg0',
            title: "Hidden Genius Project Bonus and Deduction Application",
            description: "I built the application using Python with a Tkinter GUI and a Firebase Firestore backend. This program also allows the user to Login and Sign up, choose what cohort/year/location/season this genius resides in, as well as output all information for that location site on that given year and season into .txt (containing every genius and the log of every bonus and deduction of each genius) and .xlsx files."
        },
        {
            id: 'dwGcGqwuPfo',
            title: "Tailor Made (Senior Project)",
            description: "For our Senior Project, we were tasked with creating either a mobile or web application that solved a problem within our community. Me and three classmates created a social media ecommerce platform that allowed fashion enthusiasts and designers to create a community where they were able to share, buy/sell, and express their love of clothing to others. We created our IOS application using Xcode and swift with a backend of cloud storage through Firebase."
        },
        
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className="portfolio-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={0}
                    />
                </h1>
            </div>
            <div className="videos">
                {videosData.map((video, index) => (
                    <div key={index} className="video-item">
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`} // Added autoplay and mute
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="description-box">
                            <h2>{video.title}</h2>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
