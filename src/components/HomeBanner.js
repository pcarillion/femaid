import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { StyledHomeBanner } from '../styles/page'
const HomeBanner = ({img1, img2}) => {
  return (
    <StyledHomeBanner
        style={{
            // background: `url(${img1}), url(${img2})`,
            background: `url${img1}) right bottom no-repeat, url(${img2}) left top repeat;`
        }}
        >
        <div className="img" style={{backgroundImage: `linear-gradient(rgba(1, 1, 1, 0), rgba(1, 1, 1, 0.7)), url(${img1})`}}></div>
        <div className="img" style={{backgroundImage: `linear-gradient(rgba(1, 1, 1, 0), rgba(1, 1, 1, 0.7)), url(${img2})`}}></div>
        <h1>Femaid</h1>
    </StyledHomeBanner>
  )
}

export default HomeBanner