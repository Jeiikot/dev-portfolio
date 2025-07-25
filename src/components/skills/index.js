import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import skillsData from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)
  const { skills } = skillsData
  const { t } = useTranslation()

  return (
    <Fade duration={1000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
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
              <h2>{t('skills')}</h2>
              <ul className="skills-container" ref={skillsWrapper}>
                {skills.map((skill) => {
                  return (
                    <li className="skill-bar-wrapper" key={skill.skillName}>
                      <div
                        className="skill-bar"
                        style={
                          isVisibleSkillsWrapper
                            ? {
                                transition: `${1 + skill.id / 10}s width ease-in-out`,
                                width: width * (skill.amount / 100),
                              }
                            : { width: 1 }
                        }
                      ></div>
                      <div className="skill-name">
                        {t(`skills_${skill.skillName.toLowerCase()}`, skill.skillName)}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default Skills
