import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <p className="copyright">
        <span role="img" aria-label="heart">
          ❤️{' '}
        </span>
        {t('footer_message')}
        <span role="img" aria-label="heart">
          {' '}❤️
        </span>
      </p>
    </footer>
  )
}

export default Footer
