import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { isEmpty } from 'lodash'
import Loader from './UI/Loader/Loader';
import { shuffle } from './Helpers';


function App({ gameQuestions }) {

  // console.table(gameQuestions)
  // console.log( gameQuestions[0] && gameQuestions[0].image)


  const questions = gameQuestions
  const correctAnswer = gameQuestions[0].continent

  console.log("CORRECT ANSWER", correctAnswer);

  const options= ['Africa', 'Asia', 'South America', 'North America', 'Europe', 'Oceania', 'Antarctica']



    const filtered = shuffle(options, 3)
    filtered.filter(i => i !== correctAnswer)

      if(filtered.length === 3) {
        filtered.pop()
      }
    filtered.push(correctAnswer)

    console.log("filtered", filtered)



  return (
    <div className="App">
      {isEmpty(gameQuestions[0]) && <Loader />}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {questions && questions[0].image &&
          <img src={questions[0].image} width='100px' height='100px' alt = ''/>
        }

        {questions && questions.map((question, i) =>
          <div className='position' key={i} >
            <img src={question.image} width='100px' height='100px'  alt = '' />


            <h5> {question.continent}</h5>

          </div>
        )
        }


        <h2>{gameQuestions[0].continent}</h2>

        <h1> START APP </h1>

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
