/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"



const getData = graphql`
query{
    site{
      siteMetadata{
        siteTitle: title
        siteDesc: description
        author
        image
      }
    }
    logo: file(name: {eq: "femaid-logo"}) {
      publicURL
  }
  favicon:contentfulAsset(title:{eq:"logo favicone"}) {
    file {
      fileName
      url
    }
    title
    fluid {
      src
    }
  }
    }

`


function SEO({ title, description}) {
 
  const {site, logo, favicon} = useStaticQuery(getData);


  const {siteDesc, siteTitle, image} = site.siteMetadata

  console.log(title, image)


  return (
    <Helmet title={ title?  `${title} | ${siteTitle}` : `${siteTitle}`} htmlAttributes={{lang:"eng"}}>
            <meta name="description" content={description || siteDesc}/>
            <meta rel="icon" href={favicon.file.src} />
            <link rel="icon" href={favicon.file.src} type="svg"/>
    </Helmet>
  )
}


export default SEO
