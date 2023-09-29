
import { useState } from 'react'
import dbQuestions from "./data/questions.json"
import './App.css'
import Questions from './components/Questions'

function App() {
  const [questions, setQuestions] = useState([])

  const handleStarQuestions = () =>{
    const newQuestions = dbQuestions.sort(()=> Math.random() - 0.5).slice(0, 5)
    const copyQuestions = JSON.parse(JSON.stringify(newQuestions))
    setQuestions(copyQuestions)

  }

  return (
    <main className='bg-black min-h-screen flex justify-center items-center text-white text-center px-4'>
      <section>
      <h1 className="text-4xl font-bold ">preguntas <span className='text-yellow-300'>js</span></h1>

      {questions.length === 0 && (
          <button onClick={handleStarQuestions} className='bg-yellow-400 p-2 px-4 rounded-md mt-5 mx-auto block text-black font-bold text-lg hover:bg-yellow-300 transition-colors'>vamos!</button>
      )}

      {questions.length !== 0 && (<Questions questions={questions} setQuestions={setQuestions}/>)}

      
      </section>
    </main>
  )
}

export default App
