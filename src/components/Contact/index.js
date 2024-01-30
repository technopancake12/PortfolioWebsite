
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    })
 
    return (
        <>
            <div className='contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}/>
                    </h1>
                    <p>
                        I am interested in being a web developer.
                    </p>
                    <div className='contact-form'>
                        <form netlify>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'></Loader>
        </>
    )
}

export default Contact