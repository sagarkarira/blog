import React from "react"
import { Link } from "gatsby"
import Switch from "react-switch"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children, darkMode, toggleDarkMode } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    const darkModeSwitch = (
      <Switch
        checkedIcon={<div style={{ textAlign: "center" }}>🌙</div>}
        uncheckedIcon={<div style={{ textAlign: "center" }}>☀️</div>}
        onHandleColor="#ddd"
        offColor="#ddd"
        onColor="#424242"
        onChange={toggleDarkMode}
        checked={darkMode}
      />
    )

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          color: "#424242",
          backgroundColor: darkMode ? "#212121" : "white",
          height: "100%",
          minHeight: "100vh",
          transition: "0.4s ease-in-out",
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            color: darkMode ? "#eee" : "inherit",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {darkModeSwitch}
          </div>
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Sagar Karira, all rights reserved
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
