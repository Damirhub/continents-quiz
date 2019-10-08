import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import { isEmpty } from 'lodash'
import Loader from './UI/Loader/Loader';
import { shuffle } from './Helpers';

function App({ gameQuestions }) {

  console.table(gameQuestions)

  const questions = gameQuestions

  const correctAnswers = gameQuestions.map( q => q.continent)

  console.log('%cCORRECT ANSWERS', 'color: aqua',  correctAnswers)



  const options = ['Africa', 'Asia', 'South America', 'North America', 'Europe', 'Oceania', 'Antarctica']

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

  const [clicked, setClicked] = useState([false, false, false])

  const checkAnswer = (chosedAnswer, correctAnswer, i) => {
    console.log("IIIIIIII", i)
    const newItems = [...clicked]
    newItems[i] = true
    setClicked(newItems)
    console.log("CHOSED ANSWER", chosedAnswer)
    console.log("CORRECT ANSWER", correctAnswer)
    
    if (chosedAnswer === correctAnswer)
    console.log('%cCORRECT', 'color: lawngreen')
    else
    console.log('%cWRONG', 'color: RED')

  }

console.log('clicked', clicked);

  return (
    <div className="App">
      {isEmpty(gameQuestions[0]) && <Loader />}
      <header className="App-header">

        {questions && questions.map((question, i) =>
          <div className='position' key={i} >
            <img src={question.image} width='100px' height='100px' alt='' />

            {allAnswers[i].map( (answer, i) => 
              <div key = {i}>

              <button 
              style = {  { background: (clicked[i] && 'greenyellow') }} 
              onClick = {() => checkAnswer(answer, question.continent, i ) }>{answer}</button>
              <br/></div>)
              }            
            <h5> correct is {question.continent}</h5>
          </div>
        )
        }
      </header>
    </div>
  );

}

export default App;
