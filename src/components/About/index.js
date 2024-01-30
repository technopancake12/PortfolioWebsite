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
                    <p>I am very abmitious</p>
                    <p>I am very abmitious</p>
                    <p>I am very abmitious</p>
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