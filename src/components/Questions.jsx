import { useState } from "react"
import Option from "./Option"

const Questions = ({questions, setQuestions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    
    const question = questions[currentQuestion]

    const handleSelectAnswer = (indexOption) =>{
      const copyQuestions = [...questions]
      copyQuestions[currentQuestion].user_answer = indexOption
      setQuestions(copyQuestions)
    }

    const handleNextQuestion = ()=>{
      setCurrentQuestion(currentQuestion + 1)

    }

    const handlePreviusQuestion = ()=>{
      setCurrentQuestion(currentQuestion - 1)
    }

    let correctAnswers = 0
    let incorrectAnswers = 0

    questions.forEach(question => {
      if(question.user_answer === null) return
      if(question.correct_answer === question.user_answer){
        correctAnswers++
      }else{
        incorrectAnswers++
      }
    });



  return (
    <section className="my-5 text-lg grid gap-3">
         <div className="font-bold">
            <span> {currentQuestion + 1} / {questions.length}</span>
         </div>

        <div className="bg-white/30 p-4 rounded-lg max-w-[500px] font-semibold">
          <p>{question.description}</p>
        </div>

        <div className="grid gap-2">
          <Option handleSelectAnswer={handleSelectAnswer} text={question.options[0]} indexOption={0} correctAnswer={question.correct_answer} userAnswer={question.user_answer}/>

          <Option handleSelectAnswer={handleSelectAnswer} text={question.options[1]} indexOption={1} correctAnswer={question.correct_answer} userAnswer={question.user_answer}/>

          <Option handleSelectAnswer={handleSelectAnswer} text={question.options[2]} indexOption={2} correctAnswer={question.correct_answer} userAnswer={question.user_answer}/>

          <Option handleSelectAnswer={handleSelectAnswer} text={question.options[3]} indexOption={3} correctAnswer={question.correct_answer} userAnswer={question.user_answer}/>
          
        </div>

        <div className="flex justify-center gap-3">

          {currentQuestion !== 0 && (
             <button onClick={handlePreviusQuestion} className="p-2 bg-orange-500 font-bold rounded-md hover:bg-orange-600 transition-colors">Anterior</button>
          )}

          {currentQuestion !== questions.length - 1 && (
             <button onClick={handleNextQuestion} className="p-2 bg-orange-500 font-bold rounded-md hover:bg-orange-600 transition-colors">Siguiente</button>
          )}
        </div>

        <div className="grid font-semibold">
          <span>Correctas: {correctAnswers} 👍</span>
          <span>Incorrectas: {incorrectAnswers} 👎</span>
        </div>
       

    </section>
  )
}
export default Questions