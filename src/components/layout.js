/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Menu from './menu'
import "./layout.css"
import "./main.css"

const Layout = ({ children, isEnglish, pathname }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Menu isEnglish={isEnglish} pathname={pathname}/>
      <div>
        <main>{children}</main>
        <footer>
          {
            isEnglish 
            ? "As the Association is not regularly funded, we depend on your donations. To make a bank transfer, send an e-mail to info@femaid.org"
            : "L’Association n’étant pas financée régulièrement, nous dépendons de vos dons. Pour faire un virement bancaire, envoyer un mail à info@femaid.org"
          }
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
