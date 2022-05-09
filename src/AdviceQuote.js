import './AdviceQuote.css';
import patternDesktop from './images/pattern-divider-desktop.svg';
import patternMobile from './images/pattern-divider-mobile.svg';
import iconDice from './images/icon-dice.svg'
import React, { useEffect, useState } from 'react';

const ADVICE_URL = 'https://api.adviceslip.com/advice';


function AdviceQuote() {
    const [ adviceObj, setAdviceObj ] = useState([]);

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = async () => {
        const res = await fetch(ADVICE_URL);
        const data = await res.json();
        const dataResponse = data.slip;
        setAdviceObj(dataResponse);
    }


    return (
        <section className="quote-container">
            <h5>ADVICE #{adviceObj.id}</h5>
            <blockquote className="generated-quote">
                "{adviceObj.advice}"
            </blockquote>
            <picture>
                <source srcSet={patternDesktop}
                        media="(min-width: 720px)" />
                <img src={patternMobile} alt="pattern divider" />
            </picture>
            <button className="dice-button" onClick={getAdvice}>
                {/* <img src={iconDice} alt="dice button" /> */}
                    <img src={iconDice} alt="dice button" />
            </button>
        </section>
    )
}

export default AdviceQuote;