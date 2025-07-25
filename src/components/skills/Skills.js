import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import skillsData from '../../data/skills.json'
import Section from '../section/Section'
import './skills.css'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const skillsWrapper = useRef()
  const { skills } = skillsData
  const { t } = useTranslation()

  return (
    <Section id="skills" title={t('skills')}>
      <div className="skills-content">
        <Fade duration={1000}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '90%' }}>
            <IsVisible once>
              {(isVisibleSkillsWrapper) => (
                <div
                  className="skills-wrapper"
                  style={
                    isVisibleSkillsWrapper
                      ? {
                          transition: '1s opacity ease-in-out',
                          transform: `translateX(0)`,
                          opacity: 1,
                        }
                      : {}
                  }
                >
                  <ul className="skills" ref={skillsWrapper}>
                    {skills.map((skill, i) => (
                      <li className="skill-bar-wrapper" key={i}>
                        <div style={{ marginTop: '11px' }}>
                          <i className={skill.class}></i>
                        </div>

                        <div className="skill-name">
                          {t(`skills_${skill.skillName.toLowerCase()}`, skill.skillName)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </IsVisible>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Skills
