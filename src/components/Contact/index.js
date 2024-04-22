import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import PhotoF from '../../../src/assets/images/photo-face.png'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_8go030z',
                'template_2zh86vc',
                form.current,
                'EMtmZHb_9o3B4ewWh'
            )
            .then(
                () => {
                    alert('Message Successfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }
 
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
                        I am interested and looking for internships and jobs related to Data analyst, Data management, Web Developing, and Cyber Security, but anything that can help me sharpen my programming skills would be great!
                        
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} netlify>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' />
                                </li>
                                <li className='half'>
                                    <input type='email' name='from_email' placeholder='Email' />
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
            <div className='photo'>
                <img className='photo-face' src={PhotoF} />
            </div>
            <Loader type='pacman'></Loader>
        </>
    )
}

export default Contact