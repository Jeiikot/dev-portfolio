import React from 'react'
import './Section.css'
import { Fade } from 'react-reveal'

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className={title.toLowerCase()}>
      <Fade left duration={1000} distance="70px">
        <h1 className="section-title">{title}</h1>
      </Fade>
      <Fade right duration={1000}>
        <div className="underline"></div>
      </Fade>
      {children}
    </section>
  )
}

export default Section
