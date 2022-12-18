import React from 'react'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {graphql} from 'gatsby';
import { renderOptions } from '../utils/renderOptions';

import SEO from "../components/seo"

import { StyledProjectMain } from '../styles/project';

const Project = ({data}) => {
    // const {author, text,authorPresentation, title, country} = data.text
    const {title, mainPicture, description} = data.project
        const images = data.images.edges
          const options = renderOptions(images)
      
    return (
        <Layout>
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
                        {documentToReactComponents(description.json, options)}
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
        title
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
