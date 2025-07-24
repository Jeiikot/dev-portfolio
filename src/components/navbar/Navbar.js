import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import MobileNav from '../mobileNav/MobileNav'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [mobilenavVisible, setMobilenavVisible] = useState(false)
  const [hamburgerClass, setHamburgerClass] = useState('')
  const { t } = useTranslation()

  const toggleMobilenavVisible = () => {
    setMobilenavVisible(!mobilenavVisible)
    if (hamburgerClass === '') {
      setHamburgerClass('open')
    } else {
      setHamburgerClass('')
    }
  }
  return (
    <div className="navbar">
      <div className="navlinks">
        <div className="navlink-wrapper">
          <Link to="home" spy={true} smooth={true} duration={500}>
            {t('nav_home')}
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="about" spy={true} smooth={true} duration={500}>
            {t('nav_about')}
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            {t('nav_skills')}
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="experience" spy={true} smooth={true} duration={500}>
            {t('nav_experience')}
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="projects" spy={true} smooth={true} duration={500}>
            {t('nav_projects')}
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            {t('nav_contact')}
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <div
          id="hamburger-icon"
          className={hamburgerClass}
          onClick={toggleMobilenavVisible}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MobileNav
        toggleMobilenavVisible={toggleMobilenavVisible}
        mobilenavVisible={mobilenavVisible}
      />
    </div>
  )
}

export default Navbar
