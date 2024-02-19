import { useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

/**
 *Fluxo de renderização:
 * 1. Toda vez que alteramos o estdaao de um componente, todo o componente vai ser renderizado (recalculado)
 * 2. Toda vez que o seu componente pai renderizar
 * 3. Toda vez que alguma das suas propriedades mudarem
 */

 // Algoritmo de reconciliação
 // 1. Cria em memória uma nova versão do HTML do componente
 // 2. Compara essa nova versão com a versão anterior do HTML (diff)
 // 3.  Aplica as operações javascript para alterar somente o necessário no HTML

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [ answers, setAnswers ] = useState(['Meu primeiro tweet'])

  function createNewAnswer(event: React.FormEvent) {
    event.preventDefault()
    
    setAnswers([newAnswer, ...answers]) // spread operator (desestruturação de object)
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: React.KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]) // spread operator (desestruturação de object)
      setNewAnswer('')
    }
  }

    return (
        <main className="status">
        <Header title='Tweet' />

        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        <Separator />

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Gisellebm.png" alt="Giselle Brasil" />
            <textarea 
              id="tweet" 
              placeholder='Tweet your answer' 
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={event => {
                setNewAnswer(event.target.value)
              }}
            />
          </label>

          <button  type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>

        </form>

        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })} 

        </main>
    ) 
}