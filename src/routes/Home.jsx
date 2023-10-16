import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1>Inicial Page</h1>
      <button onClick={toggleTheme}>Change theme</button>
      <p>The current theme is: {theme}</p>
    </div>
  )
}

export default Home