import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import { isEmpty } from 'lodash'
import Loader from './UI/Loader/Loader';
import { shuffle } from './Helpers';
import Button from './UI/Button/Button';


function App({ gameQuestions }) {

  console.table(gameQuestions)
  // console.log( gameQuestions[0] && gameQuestions[0].image)


  const questions = gameQuestions
  const correctAnswer = gameQuestions[0].continent

  const correctAnswers = gameQuestions.map( q => q.continent)

  console.log('MULTIANSWERS', correctAnswers)



  const options = ['Africa', 'Asia', 'South America', 'North America', 'Europe', 'Oceania', 'Antarctica']


  console.log("CORRECT ANSWER", correctAnswer);

  const getAnswers = ( correctAnswer, options ) => {
    let answers = shuffle(options, 3)
    answers.push(correctAnswer)
    answers = [...new Set(answers)]
    if (answers.length === 4) {
      answers.shift()
      shuffle(answers)
    }
    return answers
  }

  const allAnswers = correctAnswers.map( answer => getAnswers( answer, options) )

  console.log("ANSWERS", allAnswers)



  const checkAnswer = (chosedAnswer, correctAnswer) => {
    console.log("CHOSED ANSWER", chosedAnswer)
    console.log("CORRECT ANSWER", correctAnswer)

    if (chosedAnswer === correctAnswer)
    console.log('%cCORRECT', 'color: lawngreen')
    else
    console.log('%cWRONG', 'color: RED')
  }

 let clicked = false;

  return (
    <div className="App">
      {isEmpty(gameQuestions[0]) && <Loader />}
      <header className="App-header">

        {questions && questions.map((question, i) =>
          <div className='position' key={i} >
            <img src={question.image} width='100px' height='100px' alt='' />

            {allAnswers[i].map( (answer, i) => 
              <div key = {i}>

      <Button onClick = {() =>checkAnswer(answer, question.continent)} clicked = {clicked}>{answer}</Button>
               
              <br/></div>)
              }
            <h5> correct is {question.continent}</h5>
          </div>
        )
        }


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
