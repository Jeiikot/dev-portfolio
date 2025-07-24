import React from 'react'
import { useTranslation } from 'react-i18next'

import { Analytics } from '@vercel/analytics/react';
import './App.css'

import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'

function App() {
  const { i18n } = useTranslation()
  console.log('Current lang:', i18n.language)

  return (
    <div className="App">
      <Analytics />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
