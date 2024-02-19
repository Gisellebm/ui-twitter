import twitterLogo from '../assets/logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'

import './Sidebar.css'
import { NavLink } from 'react-router-dom'

// contexto -> existem locais em que eu consigo ter acesso a informações e locais que não consigo ter acesso a informações

export function Sidebar() {
    return (
        <aside className="sidebar">
        <img src={twitterLogo} alt="Logo" className='logo'/>

        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill' /> 
            <span>Home</span>
          </NavLink>

          <a href="">
            <Hash />
            <span>Explore</span>
          </a>

          <a href="">
            <Bell />
            <span>Notification</span>
          </a>

          <a href="">
            <Envelope />
            <span>Messages</span>
          </a>

          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>

          <a href="">
            <FileText />
            <span>Lists</span>
          </a>

          <a href="">
            <User />
            <span>Profile</span>
          </a>

          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>

        </nav>

        <button className="new-tweet" type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>

      </aside>
    )
}