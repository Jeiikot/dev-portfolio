import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import instagram from '../../images/social/instagram.png'
import twitter from '../../images/social/twitter.png'
import Stackoverflow from '../../images/social/stackoverflow.png'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Section title={t('contact')}>
      <p className="contact-description">{t('contact_description')}</p>
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/jeiikot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>

          <a
            href="https://stackoverflow.com/users/tu_stackoverflow_id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stackoverflow"
          >
            <img src={Stackoverflow} alt="Stackoverflow Logo" width="40px" />
          </a>

          <a
            href="https://www.linkedin.com/in/jeiikot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.instagram.com/tu_instagram/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram Logo" width="40px" />
          </a>

          <a
            href="https://twitter.com/tu_twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src={twitter} alt="Twitter Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
