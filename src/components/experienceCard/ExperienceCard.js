import React from 'react'
import './ExperienceCard.css'
import { useTranslation } from 'react-i18next'

const ExperienceCard = ({ experience }) => {
  const { i18n } = useTranslation()
  const lang = i18n.language

  const title = typeof experience.title === 'object' ? experience.title[lang] : experience.title

  const infoLines = Array.isArray(experience.info?.[lang])
    ? experience.info[lang]
    : experience.info?.[lang]
      ? [experience.info[lang]]
      : []

  const dateTo =
    experience.dateTo === 'Actualidad' && lang === 'en'
      ? 'Present'
      : experience.dateTo

  let logoFile = ''
  try {
    logoFile = require(`../../images/logos/${experience.company.replace(/ /g, '').toLowerCase()}.png`)
  } catch {
    logoFile = require(`../../images/logos/default.png`)
  }

  const Wrapper = experience.link
    ? (props) => <a className="experience-link" href={experience.link} target="_blank" rel="noopener noreferrer">{props.children}</a>
    : (props) => <div className="experience-link">{props.children}</div>

  return (
    <Wrapper>
      <div className="experience-card-wrapper">
        <div className="experience-card">
          <div className="experience-card-top">
            <div
              className="experience-bg"
              style={{ background: experience.colourPrimary }}
            ></div>
            <h2>{experience.company}</h2>
            <div className="image-wrapper">
              <div
                className="experience-bg logo-bg"
                style={{
                  background: experience.colourSecondary
                    ? experience.colourSecondary
                    : experience.colourPrimary,
                }}
              ></div>
              <img
                className="company-logo"
                src={logoFile}
                alt={`${experience.company}-logo`}
                style={
                  experience.logoheight
                    ? { height: `${experience.logoheight}%` }
                    : { width: `${experience.logowidth}%` }
                }
              />
            </div>
          </div>
          <div className="experience-card-bottom">
            <div>
              <h2>{title}</h2>
              <h3>
                {experience.dateFrom} - {dateTo}
              </h3>
              <ul>
                {infoLines.map((point, idx) => (
                  <li key={`${experience.company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="experience-card-tech">
              <ul>
                {experience.stack.map((tech) => (
                  <li key={`${experience.company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ExperienceCard
