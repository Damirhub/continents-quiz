import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.scss';
import { shuffle } from './Helpers';

function Index() {

    const [questionsNumber] = useState(5)
    const [gameQuestions, setGameQuestions] = useState(false)

    useEffect(() => {
        let url = 'https://api.myjson.com/bins/a6da9'

        fetch(url)
            .then(response => {
                console.log("%cRESPONSE:  ", "color: blue", response)
                if (!response.ok) {
                    console.error('HTTP error, status = ' + response.status);
                }
                return  response.json()
            }).then(questions => {

                console.log("%cRECEIVED DATA:  ", "color: lawngreen", questions)

                if (questions) {
                    setGameQuestions( shuffle (questions, questionsNumber))
                }
            })
            .catch(err => {
                throw err
            })   
    }, [])

    return (
        gameQuestions && <App gameQuestions = {gameQuestions} /> 

    );
}



ReactDOM.render(<Index />, document.getElementById('root'));
