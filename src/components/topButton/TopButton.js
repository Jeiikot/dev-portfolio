import React, { useState, useEffect } from 'react'
import './TopButton.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { Link } from 'react-scroll'

const TopButton = () => {
  const [topButtonVisible, setTopButtonVisible] = useState(false)

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > window.innerHeight + 63 ||
        document.documentElement.scrollTop > window.innerHeight + 63
      ) {
        setTopButtonVisible(true)
      } else {
        setTopButtonVisible(false)
      }
    }

    window.addEventListener('scroll', scrollFunction)
    window.addEventListener('load', scrollFunction)
    return () => {
      window.removeEventListener('scroll', scrollFunction)
      window.removeEventListener('load', scrollFunction)
    }
  }, [])

  return (
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      offset={-63}
    >
      <button
        className={'topButton ' + (topButtonVisible ? 'on' : 'off')}
        title="Go to top"
      >
        <i aria-hidden="true">
          <ArrowUpwardIcon />
        </i>
      </button>
    </Link>
  )
}

export default TopButton
