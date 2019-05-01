import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useDarkMode } from "../utils/hooks"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [darkMode, toggleDarkMode] = useDarkMode()

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
      <Layout
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        location={location}
        title={siteTitle}
      >
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
