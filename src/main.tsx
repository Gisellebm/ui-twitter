import React from 'react'
import ReactDOM from 'react-dom/client'
import twitterLogo from './assets/logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img src={twitterLogo} alt="Logo" className='logo'/>

        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill' /> Home
          </a>

          <a href="">
            <Hash />
            Explore
          </a>

          <a href="">
            <Bell />
            Notification
          </a>

          <a href="">
            <Envelope />
            Messages
          </a>

          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>

          <a href="">
            <FileText />
            Lists
          </a>

          <a href="">
            <User />
            Profile
          </a>

          <a href="">
            <DotsThreeCircle />
            More
          </a>

        </nav>

        <button className="new-tweet" type='button'>
          Tweet
        </button>

      </aside>

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home 
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/maykbrito.png" alt="Mayk Brito" />
              <textarea id="tweet" placeholder='What`s happening' />
            </label>

            <button type="submit">Tweet</button>
            
          </form>

          <div className="separator" />
        </main>
      </div>
    </div>
  </React.StrictMode>
)