
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import Footer from '../components/Footer'

import questions from '../questions-hexadecimal.json'

export default function QuizPage() {

  const [loading, setLoading] = useState(false);

  let questionList = []
  useEffect( () => {
    console.log("Running use-effect")
    if(!loading){
      
      for (let i = questions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [questions[i], questions[j]] = [questions[j], questions[i]];
      }
      console.log('Questions shuffled');
      console.log(questions[0], questions[1], questions[2], questions[3], questions[4])
      setLoading(true);
    }
    return () => {};
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  }

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = {answerByUser: answer}),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions)
  }

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  }

  // const binaryToDecimal = (binary) => {
  //   let decimal = 0;
  //   for (let i = 0; i < 8; i++) {
  //       let digit = binary % 10;
  //       decimal += digit * Math.pow(2, 7 - i);
  //       binary = Math.floor(binary / 10);
  //   }
  //   return decimal;
  // }

  // const createQuestion = () => {
  //   let binaryNumber = 0;
  //   for(let i = 0; i < 8; i++) {
  //     binaryNumber = binaryNumber*10 + Math.floor(Math.random() * 2);
  //   }

  //   let answers = [];
  //   answers.push({"answer": binaryToDecimal(binaryNumber), "isCorrect": true});
  //   for(let j = 0; j < 3; j++) {
  //       binaryNumber = 0;
  //       for(let i = 0; i < 8; i++) {
  //       binaryNumber = binaryNumber*10 + Math.floor(Math.random() * 2);
  //       }
  //       answers.push({"answer": binaryToDecimal(binaryNumber)});
  //   }

  //   for (let i = answers.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [answers[i], answers[j]] = [answers[j], answers[i]];
  //   }
    
  //   return {
  //       "question": "What is the decimal equivalent of " + binaryNumber + "?",
  //       "answerOptions": answers,
  //   }
  // }

  

  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#1A1A1A]">
      <Head>
        <title>Quiz App</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-screen px-5 h-screen bg-[#1A1A1A]">
        
        {showScore ? (
          <>
          <h1 className="text-3xl font-semibold text-center text-white">
            You scored {score} out of 5
          </h1>

          <div className="flex w-full mt-4 px-2 text-white flex justify-center justify-between">
          <div className="w-[49%] py-3 px-2 bg-indigo-600 rounded-lg flex justify-center"
            ><Link href="/"><a>Go Back</a></Link>
          </div>
          <button 
            onClick={() => {
              let curreentLocation = window.location.pathname;
              window.location.href = curreentLocation;
            }} 
            className="w-[49%] py-3 px-2 bg-indigo-600 rounded-lg flex justify-center"
            >Start Over
          </button>
          </div>
          </>
          ) : !loading ? (
            <p className="text-white">Loading ...</p>
          ) :
          (
        <>
        <div className="flex flex-col items-start w-full">
          <h4 className="mt-10 text-xl text-white/60">Question {currentQuestion + 1} of 5</h4>
          <div className="mt-4 text-2xl text-white">
            {questions[currentQuestion].question}
          </div>
        </div>

        <div className="flex flex-col w-full">
          {questions[currentQuestion].answerOptions.map((answer, index) => (
            <div
              key={index}
              className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
              onClick={(e) => handleAnswerOption(answer.answer)}
            >
              <input 
                type="radio" 
                name={answer.answer}
                value={answer.answer}
                onChange={(e) => handleAnswerOption(answer.answer)}
                checked={answer.answer === selectedOptions[currentQuestion]?.answerByUser}
                className="w-6 h-6 bg-black" />
              <p className="ml-6 text-white">{answer.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full mt-4 text-white">
          <button 
            onClick={handlePrevious} 
            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >Previous
          </button>
          <button 
            onClick={
              currentQuestion + 1 === 5 ? handleSubmitButton : handleNext
            } 
            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >{currentQuestion + 1 === 5 ? 'Submit' : 'Next'}
          </button>
        </div>
        </>
          )};

      </div>

      

      <Footer />
    </div>
  )
}


