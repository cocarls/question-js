const Option = ({text, handleSelectAnswer, indexOption, correctAnswer, userAnswer }) => {

  const isQuestionAnswered = userAnswer !== null 

  return (
    <button disabled={isQuestionAnswered} onClick={() => handleSelectAnswer(indexOption)} className="font-bold italic p-2 bg-white/50 hover:text-black rounded-lg">{text}</button>
  )
}
export default Option