import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <>
            <div className='about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm','e']} 
                            idx={15}/>
                    </h1>
                    <p>

I am a dedicated Computer Science undergraduate student at California State University, Long Beach, driven by a passion for technology and innovation. My journey into the world of computing began during my sophomore year of high school when I participated in the prestigious Hidden Genius project. This transformative experience not only equipped me with essential skills in entrepreneurship and leadership but also laid the foundation for my technical expertise.

During my time with the Hidden Genius project, I immersed myself in various programming languages including Python, HTML, CSS, SQL, Swift, and Ruby. Through hands-on projects and mentorship, I honed my abilities in software development, web design, and database management. Beyond technical proficiency, the program instilled in me a profound understanding of teamwork, problem-solving, and effective communication.

Recognizing my potential and dedication, I was offered the unique opportunity to serve as an Educator within the Hidden Genius community. In this role, I mentored and inspired future generations of innovators and leaders, ranging from ages 8 to 16. By sharing my knowledge and experiences, I empowered young minds to explore their creativity, develop critical thinking skills, and pursue their passions in technology.

My journey from student to educator exemplifies my commitment to continuous learning, personal growth, and making a positive impact in the tech community. As I continue my academic and professional pursuits in Computer Science, I am excited to leverage my diverse experiences and skills to contribute meaningfully to the ever-evolving field of technology.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faDatabase} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default About