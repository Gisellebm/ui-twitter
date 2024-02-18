import { useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'



export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [ answers, setAnswers ] = useState(['Meu primeiro tweet'])

  function createNewAnswer(event: React.FormEvent) {
    event.preventDefault()
    
    setAnswers([newAnswer, ...answers]) // spread operator (desestruturação de object)
    setNewAnswer('')
    
  }
    return (
        <main className="status">
        <Header title='Tweet' />

        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        <Separator />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/maykbrito.png" alt="Mayk Brito" />
            <textarea 
              id="tweet" 
              placeholder='Tweet your answer' 
              value={newAnswer}
              onChange={event => {
                setNewAnswer(event.target.value)
              }}
            />
          </label>

          <button  type="submit">Answer</button>

        </form>

        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })} 

        </main>
    ) 
}