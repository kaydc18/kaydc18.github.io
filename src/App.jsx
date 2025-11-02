import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'

function App() {

  return (
    <div className="grid grid-cols-12 h-screen">
      <nav className="col-span-2 bg-salmon-900">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Home</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">About</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Services</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Contact</a></li>
        </ul>
      </nav>
      <main className="col-span-10 bg-salmon-100">
        <div className="mx-auto max-w-5xl h-6 bg-fuchsia-900 mb-14 flex justify-end items-center gap-4 p-2"> contact icons </div>
          <div className="mx-auto my-auto max-w-5xl flex flex-col items-start justify-center gap-14 p-4">
            <section className="flex flex-col items-start justify-start gap-1">
              <h1>Hi! I'm Kaylyn.</h1>
              <h2 className="text-fuchsia-900">Design Engineer & Accessibility Advocate</h2>
              <p className="mb-1.5">I blend front-end engineering and design thinking to craft accessible, cohesive user experiences. I love turning beautiful concepts into functional, inclusive interfaces and building systems that help teams move faster together.</p>
              <Button variant="primary" buttonText="See Projects" />
            </section>
            <hr className="border-2 border-salmon-900 w-10 rounded-full self-center" />
            <section className="flex flex-col items-start justify-start gap-1">
              <h3>Skills and Interests</h3>
              <p>React • HTML • CSS • Tailwind • Figma • Design Systems • Accessibility (CPACC) • Prototyping • Inclusive Design</p>
            </section>
          </div>
      </main>
    </div>
  )
}

export default App
