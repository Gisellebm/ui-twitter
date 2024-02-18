import twitterLogo from '../assets/logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import './Sidebar.css'
import { NavLink } from 'react-router-dom'

// contexto -> existem locais em que eu consigo ter acesso a informações e locais que não consigo ter acesso a informações

export function Sidebar() {
    return (
        <aside className="sidebar">
        <img src={twitterLogo} alt="Logo" className='logo'/>

        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill' /> Home
          </NavLink>

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
    )
}