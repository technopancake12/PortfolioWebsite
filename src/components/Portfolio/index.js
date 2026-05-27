import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
    {
        id: 1,
        title: "Genius Hub",
        description: "Full-stack internal platform enabling Hidden Genius Project students to deploy and showcase Unity-based games. Built with Flask, AWS DynamoDB, S3, and App Runner. Fully built and live — pending final organizational and legal review before public launch.",
        tech: ["Python", "Flask", "AWS DynamoDB", "AWS S3", "AWS App Runner", "Unity"],
        github: null,
        status: "In Review",
        youtubeId: null,
        placeholder: { icon: "⚙️", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }
    },
    {
        id: 2,
        title: "YE Maps",
        description: "React application with AWS backend enabling Youth Educators to find open positions within the Hidden Genius Project, while giving staff a centralized dashboard to track educator hours and skills taught across the program.",
        tech: ["React", "TypeScript", "AWS", "Node.js"],
        github: null,
        status: "In Development",
        youtubeId: null,
        placeholder: { icon: "🗺️", gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" }
    },
    {
        id: 3,
        title: "Tailor Made",
        description: "iOS social e-commerce platform for fashion enthusiasts to share, buy, and sell clothing. Built as a senior capstone project with a team of four using Swift and a Firebase cloud backend with full authentication and cloud storage.",
        tech: ["Swift", "iOS", "Firebase", "Xcode", "Cloud Storage"],
        github: "https://github.com/technopancake12",
        status: "Completed",
        youtubeId: "dwGcGqwuPfo",
        placeholder: null
    },
    {
        id: 4,
        title: "HGP Bonus & Deduction Tracker",
        description: "Python desktop application with Tkinter GUI and Firebase Firestore backend for tracking student bonuses and deductions. Supports multi-cohort, multi-location, multi-season data with login/signup and exports to .txt and .xlsx formats.",
        tech: ["Python", "Tkinter", "Firebase", "Firestore", "openpyxl"],
        github: "https://github.com/technopancake12",
        status: "Completed",
        youtubeId: "I9sJmIZxLg0",
        placeholder: null
    },
    {
        id: 5,
        title: "Truck Track",
        description: "React + JavaScript web app for discovering and locating food trucks near you. Built using agile development practices with cloud data retrieval and a mobile-first user experience.",
        tech: ["React", "JavaScript", "Cloud Services", "Agile"],
        github: "https://github.com/technopancake12",
        status: "Completed",
        youtubeId: null,
        placeholder: { icon: "🚚", gradient: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 50%, #4a0e7a 100%)" }
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Personal portfolio built with React featuring animated letter effects, custom sidebar navigation, API integrations, and cloud storage. Showcases UI/UX and full-stack development skills — the site you're viewing now.",
        tech: ["React", "JavaScript", "SCSS", "Node.js", "AWS"],
        github: "https://github.com/technopancake12",
        status: "Live",
        youtubeId: null,
        placeholder: { icon: "💼", gradient: "linear-gradient(135deg, #1a1200 0%, #332200 50%, #4d3300 100%)" }
    }
];

const statusColors = {
    'Live': '#00c853',
    'Completed': '#ffd700',
    'In Development': '#2196f3',
    'In Review': '#ff9800'
};

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['', 'M', 'y', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
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
                <p className="portfolio-intro">
                    A collection of projects spanning full-stack web apps, mobile development, desktop tools, and cloud infrastructure.
                </p>
            </div>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="card-media">
                            {project.youtubeId ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${project.youtubeId}?mute=1`}
                                    title={project.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="card-placeholder"
                                    style={{ background: project.placeholder?.gradient }}
                                >
                                    <span className="placeholder-icon">{project.placeholder?.icon}</span>
                                    <span className="placeholder-label">{project.title}</span>
                                </div>
                            )}
                            <span
                                className="status-badge"
                                style={{ background: statusColors[project.status] }}
                            >
                                {project.status}
                            </span>
                        </div>

                        <div className="card-body">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            <div className="tech-tags">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="card-links">
                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-btn github-btn"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                        GitHub
                                    </a>
                                ) : (
                                    <span className="card-btn private-btn">Private Repo</span>
                                )}
                                {project.youtubeId && (
                                    <a
                                        href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-btn demo-btn"
                                    >
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        Watch Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
