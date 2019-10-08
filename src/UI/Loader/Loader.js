import React, { useState, useEffect } from 'react'
import './Loader.scss'
const Loader = () => {

    const [timerIn] = useState('1000');
    const [timerOut] = useState('10000');

    const [show, setShow] = useState(true)


    useEffect(() => {
        let timer1 = setTimeout(() => {
            setShow(true)
        }, timerIn)
        let timer2 = setTimeout(() => {
            setShow(false)
        }, timerOut)
        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        };
    }, [timerIn, timerOut]
    )




    return (
        <>
            {show ?
                <div className="preloader">
                    <div className="loader"></div>
                </div>
                : <div className="try-wrapper">
                    <h2 className="try-again"> Reload ?</h2>
                </div>
            }
        </>
    )
}

export default Loader
