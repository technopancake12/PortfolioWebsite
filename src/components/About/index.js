import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faReact, faPython, faNodeJs, faAws } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const skillCategories = [
    {
        name: 'Frontend',
        skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3 / SCSS']
    },
    {
        name: 'Backend',
        skills: ['Python', 'Flask', 'Django', 'Node.js', 'Java', 'C++']
    },
    {
        name: 'Mobile',
        skills: ['Swift', 'iOS', 'Xcode', 'Firebase']
    },
    {
        name: 'Cloud & Data',
        skills: ['AWS DynamoDB', 'AWS S3', 'AWS App Runner', 'SQL', 'Firebase Firestore']
    },
    {
        name: 'Design & Tools',
        skills: ['Figma', 'InVision Studio', 'Unity', 'Git', 'GitHub', 'Agile']
    }
]

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='about-page'>
                <div className='about-header'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                                idx={15} />
                        </h1>
                        <p>
                            I'm a full-stack software engineer and educator passionate about building impactful technology and inspiring the next generation of innovators. I graduated from California State University, Long Beach with a Bachelor of Engineering in Computer Science in May 2024.
                        </p>
                        <p>
                            Currently serving as an Innovation Educator I at The Hidden Genius Project, I design transformative learning experiences in technology, entrepreneurship, and personal development for young Black males — developing 75+ hours of original curriculum across Game Development, Web Development, UI/UX Design, and Life Skills for 150+ students.
                        </p>
                        <p>
                            Beyond teaching, I lead full-stack development of Genius Hub (Flask, AWS) and YE Maps (React, AWS) — internal tools that extend the organization's reach and impact. I thrive at the intersection of technical depth and user-centered design.
                        </p>
                    </div>

                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faReact} color='#61DBFB' />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faPython} color='#3776AB' />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faNodeJs} color='#68A063' />
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon icon={faGithub} color='#ffffff' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='skills-section'>
                    <h2 className='skills-title'>Technical Skills</h2>
                    <div className='skills-grid'>
                        {skillCategories.map((cat, i) => (
                            <div key={i} className='skill-category'>
                                <h3>{cat.name}</h3>
                                <div className='skill-tags'>
                                    {cat.skills.map((skill, j) => (
                                        <span key={j} className='skill-tag'>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default About
