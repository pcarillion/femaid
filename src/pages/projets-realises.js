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
    page: contentfulFemaidPages(slug: {eq: "projets-realises"}) {
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

    const options = renderOptions(images.edges)

    const isEnglish = location.pathname.includes('/en') ? true : false;
    const title = isEnglish ? 'The story so far: Femaid from 1993-2001' : 'Projets réalisés'
    const text = isEnglish ? page.textContentEn.json:  page.textContent.json

    return (
        <Layout isEnglish={isEnglish} pathname={location.pathname}>
            <SEO />
            <StyledPageContainer>
                <HomeBanner title={title} img1={page.firstPicture.file.url} img2={page.secondPicture.file.url}/>
                {page.video && <div className="video-in-article">
                  <iframe width="560" height="315" src={page.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>}
                <div className="container">
                  {documentToReactComponents(text, options)}
                </div>
            </StyledPageContainer>
 
        </Layout>
    )
}

export default Index
