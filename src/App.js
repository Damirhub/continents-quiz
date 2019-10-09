import React, { useState } from 'react';
import './App.scss';
import { isEmpty } from 'lodash'
import Loader from './UI/Loader/Loader';
import { shuffle } from './Helpers';
import Button from './UI/Button/Button';


function App({ gameQuestions }) {

  console.table(gameQuestions)

  const questions = gameQuestions

  const correctAnswers = gameQuestions.map(q => q.continent)

  console.log('%cCORRECT ANSWERS', 'color: aqua', correctAnswers)

  const options = ['Africa', 'Asia', 'South America', 'North America', 'Europe', 'Oceania', 'Antarctica']

  const getAnswers = (correctAnswer, options) => {
    let answers = shuffle(options, 3)
    answers.push(correctAnswer)
    answers = [...new Set(answers)]
    if (answers.length === 4) {
      answers.shift()
      shuffle(answers)
    }
    return answers
  }

  const allAnswers = correctAnswers.map(answer => getAnswers(answer, options))

  console.log("ANSWERS", allAnswers)

  const [points, setPoints] = useState(0)

  const checkAnswer = (chosedAnswer, correctAnswer) => {

    console.log("%cCHOSED ANSWER", 'color: teal', chosedAnswer)
    console.log("%cCORRECT ANSWER", 'color: green', correctAnswer)

    if (chosedAnswer === correctAnswer){
        setPoints( points + 750 )
        localStorage.setItem("points", `${points}`);
        console.log(points);
        
        console.log('%cCORRECT', 'color: lawngreen')
    }
    else
      console.log('%cWRONG', 'color: RED', localStorage.getItem('points'))
  }

  return (
    <div className="App">
      {isEmpty(gameQuestions[0]) && <Loader />}
      <div className="question-wrapper">

        {questions && questions.map((question, i) =>
          <div className='question' key={i} >
            <img src={question.image} width='300px' height='200px' alt='' />

            {allAnswers[i].map( (answer, i) => 
              <div key = {i}>
              <Button 
                onClick = {() => checkAnswer(answer, question.continent, i ) }>{answer}
              </Button>
              <br/>
              </div>)
              }            
            <h5> Correct is {question.continent}</h5>
          </div>
        )
        }
      </div>
    </div>
  );
}


  export default App;
