import React, { useRouter } from 'react'
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
        textContentEn {
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

const Index = ({location}) => {

    const {page, images}  = useStaticQuery(getData)

    const isEnglish = location.pathname.includes('/en') ? true : false

    const options = renderOptions(images.edges)


    return (
        <Layout isEnglish={isEnglish} pathname={location.pathname}>
            <SEO />
            <StyledPageContainer>
                <HomeBanner title={'Femaid'} img1={page.firstPicture.file.url} img2={page.secondPicture.file.url}/>
                <div className="container">
                  {isEnglish ? documentToReactComponents(page.textContentEn.json, options) : documentToReactComponents(page.textContent.json, options)}
                </div>
            </StyledPageContainer>
 
        </Layout>
    )
}

export default Index
