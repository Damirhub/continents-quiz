import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
