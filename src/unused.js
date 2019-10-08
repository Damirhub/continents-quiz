  // const temp = []

  // let random = (questions) => questions && questions[(Math.round(Math.random() * questions.length))]

  // if(questions)
  // for( let i=0; i<5; i++) {
  //   temp.push(random(questions)) 
  //   setSelected(temp)
  //   console.log('random', random(questions));
  // }

//   const shuffle = (questions) => {
//     let i, j, temp

//     for (i = questions.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         temp = questions[i];
//         questions[i] = questions[j];
//         questions[j] = temp;
//     }
//     return questions;    
// };






//  repeat(5, _ => console.log(questions[Math.round(Math.random() * questions.length)] ) ) 



import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { isEmpty } from 'lodash'
import Loader from './UI/Loader/Loader';
import { shuffle } from './Helpers';


function App({ gameQuestions }) {

  // console.table(gameQuestions)
  // console.log( gameQuestions[0] && gameQuestions[0].image)


  const [didMount, setDidMount] = useState(false)

  useEffect(() => setDidMount(true), [])

  useEffect(() => {

    gameQuestions && gameQuestions[0] &&
      setQuestions(gameQuestions)

    gameQuestions && gameQuestions[0] &&
      setCorrectAnswer(gameQuestions[0].continent)


  }, [])

  console.log('didMount', didMount);


  const [questions, setQuestions] = useState([{}])


  const [correctAnswer, setCorrectAnswer] = useState()

  console.log("CORRECT ANSWER", correctAnswer);


  const [options, setOptions] = useState(['Africa', 'Asia', 'South America', 'North America', 'Europe', 'Oceania', 'Antarctica'])

  const [filtered, setFiltered] = useState([])

  useEffect(() => {

    const returnedRandom = shuffle(options, 3)

    correctAnswer && returnedRandom.push(correctAnswer)

    console.log("returnedRandom", returnedRandom)
    
    const removedDuplicates = shuffle([...new Set(returnedRandom)])
  
    console.log("removedDuplicatesShuffled",  removedDuplicates)



    // const filtered  = returnedRandom.filter(x => x === correctAnswer)


    // console.log( 'POTENTIAL OPTIONS', filtered)

      setFiltered(removedDuplicates)

      
  console.log('%cFILTERED INSIDE EFFECT with wrong values initially', 'color: orangered', filtered)

  }, [correctAnswer])
  

  
  if ( didMount && filtered.length === 4 && (filtered[filtered.length - 1] === correctAnswer) ) {

    let firstOut = [...filtered].slice(1, 4)
    setFiltered(firstOut)
    console.log("%cFIRST OUT", "color: orange",  firstOut);

  }
  else if(  didMount &&  filtered.length === 4 && (filtered[filtered.length - 1] !== correctAnswer) ) {
    setFiltered(filtered.pop())
    console.log("%cLAST OUT", "color: purple");

  }

  
  console.log('%cFILTERED OUT OF EFFECT', "color: aqua",  filtered)
  

  

  



  return (
    <div className="App">
      {isEmpty(gameQuestions[0]) && <Loader />}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {questions && questions[0].image &&
          <img src={questions[0].image} width='100px' height='100px' alt = ''/>
        }
         {/* { filtered && filtered.map( option => <button>{option}</button>)} */}

        {questions && questions.map((question, i) =>
          <div className='position' key={i} >
            <img src={question.image} width='100px' height='100px'  alt = '' />


            <h5> {filtered[i]}</h5>

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
