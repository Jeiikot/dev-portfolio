import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Coding from '../../lottie/coding.json'
import DisplayLottie from '../DisplayLottie'
import { useTranslation, Trans } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <Section id="about"  title={t('about_title')}>
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>{t('about_whoami')}</h2>
            <p>
              <Trans i18nKey="about_me" components={[<span key="name" className="name" />]} />
            </p>
            <p>
              <span role="img" aria-label="estrella">⚡</span>{' '}
              {t('about_backend')}
            </p>
            <p>
              <span role="img" aria-label="estrella">⚡</span>{' '}
              {t('about_aws')}
            </p>
            <p>
              <span role="img" aria-label="estrella">⚡</span>{' '}
              {t('about_quality')}
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="estrella">⚡</span>{' '}
                {t('about_love')}
              </p>
              <Typewriter
                options={{
                  strings: t('about_love_list', { returnObjects: true }),
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              <Trans i18nKey="about_history"
                components={[
                  <Link className="textLink" to="projects" spy smooth duration={500} />,
                  <Link className="textLink" to="experience" spy smooth duration={500} />
                ]}
              />
            </p>
            <div className="location-wrapper">
              <svg /* ...svg as is... */></svg>
              <p>{t('about_location')}</p>
            </div>
          </div>
        </Fade>
        <div className="lottie-icon">
          <DisplayLottie animationData={Coding} />
        </div>
      </div>
    </Section>
  )
}

export default About
