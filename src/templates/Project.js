import React from 'react'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {graphql} from 'gatsby';
import { renderOptions } from '../utils/renderOptions';

import SEO from "../components/seo"

import { StyledProjectMain } from '../styles/project';

const Project = ({data, location}) => {
    // const {author, text,authorPresentation, title, country} = data.text
    const {title: titleFr, titleEn, mainPicture, description, descriptionEn} = data.project
        const images = data.images.edges
          const options = renderOptions(images)

      const isEnglish = location.pathname.includes('/en') ? true : false;
      const text = isEnglish ? descriptionEn.json : description.json;
      const title = isEnglish ? titleEn : titleFr;

      
    return (
        <Layout isEnglish={isEnglish} pathname={location.pathname}>
          <SEO />
            {/* <SEO title={`${author} - ${country}`} description={title}/> */}
            {/* <h4>{title}</h4>
            <h5>{author} - {country}</h5>
            <div>
              {documentToReactComponents(authorPresentation.json, options)}
              {documentToReactComponents(text.json, options)}
            </div> */}
            <StyledProjectMain>
                <div className="container">
                    <h1>{title}</h1>
                    <div className="image-in-article">
                      <img src={mainPicture?.file.url}/>
                    </div>
                    <div>
                        {documentToReactComponents(text, options)}
                    </div>
                </div>
            </StyledProjectMain>
        </Layout>
    )
}

export const query = graphql`
query($slug:String){
    project:contentfulFemaidProject(slug: {eq: $slug}) {
        description {
          json
        }
        descriptionEn {
          json
        }
        title
        titleEn
        mainPicture {
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




export default Project
