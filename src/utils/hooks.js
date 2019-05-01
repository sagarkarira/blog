import { useState } from "react"

export const useDarkMode = () => {
	if (typeof window !== "undefined") {
		const initialState = JSON.parse(localStorage.getItem("darkMode")) || false
		const [darkMode, setDarkMode] = useState(initialState)
		const toggleDarkMode = () => {
		  setDarkMode(!darkMode)
		  localStorage.setItem("darkMode", !darkMode)
		}
		return [darkMode, toggleDarkMode]		
	}
	// builds on node env
	return [false, () => {}]
}
