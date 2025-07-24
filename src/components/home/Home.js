import React, { useState } from 'react'
import './Home.css'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/profile.png'
import { useTranslation, Trans } from 'react-i18next'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <img
            className="profile"
            alt={t('profile_alt')}
            src={profile}
            onLoad={() => setImageLoaded(true)}
          />
          <h1 className="greeting-text">
            <Trans i18nKey="greeting" components={[<span className="name" />]} />
          </h1>
          <h1 className="greeting-text">
            <Typewriter
              options={{
                strings: t('typewriter', { returnObjects: true }),
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                cursor: '_',
                delay: 100,
              }}
            />
          </h1>
          <Bounce cascade>
            <div className="resume-container">
              <a
                href={t('resume_link')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('resume')}
              </a>
            </div>
          </Bounce>
          <div className="scroll-down">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
            >
              <ArrowDropDownCircleIcon
                fontSize="large"
                style={{ pointerEvents: 'fill', cursor: 'pointer' }}
              />
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
