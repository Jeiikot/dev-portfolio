import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const MobileNav = ({ toggleMobilenavVisible, mobilenavVisible }) => {
  const { t } = useTranslation()

  return (
    <div className="mobilenav-wrapper">
      <div className={'mobilenav ' + (mobilenavVisible ? 'on' : 'off')}>
        <div className="mobilenavlinks">
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              {t('nav_home')}
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              {t('nav_about')}
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              {t('nav_experience')}
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              {t('nav_projects')}
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              {t('nav_contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
