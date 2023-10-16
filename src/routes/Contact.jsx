import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Contact = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1>Contact Page</h1>
      <p>The current theme is: {theme}</p>
    </div>
  )
}

export default Contact