import React from 'react'
import SEO from '../components/seo'
import {graphql, useStaticQuery} from "gatsby"
import Layout from '../components/layout';
import HomeBanner from '../components/HomeBanner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {StyledPageContainer} from '../styles/page'
import { renderOptions } from '../utils/renderOptions';

const getData = graphql`
query  {
    logoFullBlack:contentfulAsset(title:{eq:"logo full black"}) {
        file {
          fileName
          url
        }
        title
        fluid {
          src
        }
      }
    page: contentfulFemaidPages(name: {eq: "Home Page"}) {
        textContent {
          json
        }
        secondPicture {
          file {
            url
          }
        }
        firstPicture {
          file {
            url
          }
        }
    }
    images: allContentfulAsset{
      edges{
      node{
          contentful_id
          id
          file{url}
          description
      }
      }
  }
    }
`

const Index = () => {

    const {page, images}  = useStaticQuery(getData)

    const options = renderOptions(images)


    return (
        <Layout>
            <SEO />
            <StyledPageContainer>
                <HomeBanner img1={page.firstPicture.file.url} img2={page.secondPicture.file.url}/>
                <div className="container">
                  {documentToReactComponents(page.textContent.json, options)}
                </div>
            </StyledPageContainer>
 
        </Layout>
    )
}

export default Index
