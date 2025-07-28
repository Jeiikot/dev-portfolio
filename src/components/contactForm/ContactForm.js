import React, { useState } from 'react'
import './ContactForm.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  email: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  message: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  submit: {
    '&': {
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#6de9ab',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))
const ContactForm = () => {
  const [status, setStatus] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')
  const { t } = useTranslation()
  const classes = useStyles()

  const submitForm = (ev) => {
    ev.preventDefault()
    if (!emailText || !messageText) {
      setStatus(t('contactform_complete_form'))
      return
    }
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setEmailText('')
        setMessageText('')
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  const handleEmailChange = (event) => setEmailText(String(event.target.value))
  const handleMessageChange = (event) => setMessageText(String(event.target.value))

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        action="https://formspree.io/f/mqalbaad"
        method="POST"
      >
        <TextField
          className={classes.email}
          type="email"
          name="email"
          label={t('contactform_email')}
          value={emailText}
          onChange={handleEmailChange}
          variant="filled"
        />
        <TextField
          className={classes.message}
          type="text"
          name="message"
          label={t('contactform_message')}
          value={messageText}
          onChange={handleMessageChange}
          multiline
          minRows={5}
          variant="filled"
        />
        {status === 'SUCCESS' ? (
          <p className="email-success">{t('contactform_success')}</p>
        ) : (
          <Button className={classes.submit} type="submit" variant="contained">
            {t('contactform_submit')}
          </Button>
        )}
        {status === 'ERROR' && <p>{t('contactform_error')}</p>}
        {(status && status !== 'SUCCESS' && status !== 'ERROR') && <p>{status}</p>}
      </form>
    </div>
  )
}

export default ContactForm