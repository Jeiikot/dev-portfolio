import React from 'react'
import './FeaturedProject.css'
import { useTranslation } from 'react-i18next'

const FeaturedProject = ({ name, link, description, colour, languages }) => {
    const { i18n } = useTranslation()
    const lang = i18n.language

    const descText = typeof description === 'object' ? description[lang] : description

    let logoFile = ''
    try {
        logoFile = require(`../../images/logos/${name.replace(/ /g, '').toLowerCase()}.png`)
    } catch {
        logoFile = require(`../../images/logos/default.png`)
    }

    return (
        <a
          className="featured-project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="featured-project-wrapper">
            <div className="featured-project">
              <div
                className="featured-project-bg"
                style={{ background: colour }}
              ></div>
              <div className="featured-project-top">
                <img
                  className="featured-project-image"
                  src={logoFile}
                  alt={`${name}-logo`}
                />
              </div>
              <h2>{name}</h2>
              <p>{descText}</p>
              <div className="project-info">
                <div className="project-info-left">
                  {languages.map((language) => (
                    <div key={`${name}-${language.name}`} className="language">
                      <div
                        className="language-colour"
                        style={{ backgroundColor: language.color }}
                      ></div>
                      <p className="language-name">{language.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
    )
}

export default FeaturedProject
