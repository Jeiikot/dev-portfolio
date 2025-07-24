import React from 'react'
import Lottie from 'react-lottie'

const DisplayLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default DisplayLottie
