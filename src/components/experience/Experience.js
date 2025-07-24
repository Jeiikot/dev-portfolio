import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'
import { useTranslation, Trans } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <Section id="experience" title={t('experience')}>
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.slice().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ textAlign: 'center' }}>
              <Trans i18nKey="experience_linkedin">
                Further in-depth experience can be found on my <a
                  href="https://www.linkedin.com/in/jeiikot-ramos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: '#0be779',
                    cursor: 'pointer'
                  }}
                >LinkedIn</a>.
              </Trans>
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Experience
