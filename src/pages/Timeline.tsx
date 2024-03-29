import { useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'



// forEach x map

// forEach => não tem retorno, só percorre o array
// map => tem retorno


export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [ tweets, setTweets ] = useState(['Meu primeiro tweet'])

  function createNewTweet(event: React.FormEvent) {
    event.preventDefault()
    
    setTweets([newTweet, ...tweets]) // spread operator (desestruturação de object)
    setNewTweet('')
    
  }

  function handleHotKeySubmit(event: React.KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]) // spread operator (desestruturação de object)
      setNewTweet('')
    }
  } 

    return (
        <main className="timeline">
          <Header title='Home' />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Gisellebm.png" alt="Giselle Brasil" />
              <textarea 
                id="tweet" 
                placeholder='What`s happening' 
                value={newTweet}
                onKeyDown={handleHotKeySubmit}
                onChange={event => {
                  setNewTweet(event.target.value) 
                }}
              />
            </label>

            <button type="submit">Tweet</button>

          </form>

          <Separator />

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}

        </main>
    )
}