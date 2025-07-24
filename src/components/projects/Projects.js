import React from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import projectsData from '../../data/featured_projects.json'
import Project from '../project/Project'
import Section from '../section/Section'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  const { featured_projects } = projectsData
  return (
    <Section title={t('nav_projects')}>
      <div className="projects-content">
        <ul className="projects-list">
          {featured_projects.map((project) => {
            return (
              <li key={project.name}>
                <Fade bottom duration={1000} distance="20px">
                  <Project project={project} />
                </Fade>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export default Projects
