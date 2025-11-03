import { useState } from 'react'
import './App.css'
import SidebarNav from './components/SidebarNav.jsx'
import Button from './components/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Outlet } from 'react-router';



function App() {

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <SidebarNav />
      <main className="lg:col-span-10 md:col-span-9 col-span-12 bg-salmon-100 overflow-y-auto">
        <div className="mx-auto max-w-5xl h-6 md:mb-14 mb-1 flex justify-end items-center gap-4 p-2">
          <Button variant="secondary" buttonText="See Projects" buttonIcon={faGithub} iconLocation="center" />
          <Button variant="secondary" buttonText="See Projects" buttonIcon={faLinkedin} iconLocation="center" />
          <Button variant="secondary" buttonText="See Projects" buttonIcon={faFileArrowDown} iconLocation="center" />
        </div>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
