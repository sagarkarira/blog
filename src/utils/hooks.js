import { useState } from "react"

export const useDarkMode = () => {
  const initialState = JSON.parse(localStorage.getItem("darkMode")) || false
  const [darkMode, setDarkMode] = useState(initialState)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", !darkMode)
  }
  return [darkMode, toggleDarkMode]
}
