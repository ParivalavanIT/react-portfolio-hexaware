import React from 'react'
import LetterGlitch from '../Backgrounds/LetterGlitch/LetterGlitch.jsx';
const EmptyPage = () => {
  return (
      <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          className = 'min-h-screen'
      />
  )
}

export default EmptyPage
