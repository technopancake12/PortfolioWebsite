import { Link } from "react-router-dom";
import './index.scss'
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','I', 'a', 'n', ' ', 'B', 'u', 'n', 'd', 'y', '-', 'W', 'e', 'i', 's', 's',]
    const jobArray=['y', 'o', 'u', 't', 'h', ' ', 'e', 'd', 'u', 'c', 'a', 't', 'o', 'r']

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 4000)
    })

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>

                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span> 
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span> 
                    <span className={`${letterClass} _15`}>'m</span>       
        
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={16}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={32}/>
                    </h1>
                    <h2>CSULB Computer Science Student / Frontend Developer / Data Analyst</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Home