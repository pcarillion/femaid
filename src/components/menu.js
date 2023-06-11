import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import LangSwitch from './utils/LangSwitch'

import { StyledNav } from '../styles/menu'
// (order: { asc: order })
const getData = graphql`
query  {
    projets: allContentfulFemaidProject (sort: {fields: order}) {
        edges {
          node {
            slug
            country
            countryEng
          }
        }
    }
    logo: file(name: {eq: "femaid-logo"}) {
        publicURL
    }
}
`

const Menu = ({isEnglish, location, pathname}) => {
    const {logo, projets}  = useStaticQuery(getData)    

    const [isOpen, setNav] = useState(false)

    const [MobileIsOpen, setMobileNav] = useState(false)

    const toggleNav = (val) => {
        setNav(val)
    }
    
    const toggleMobileNav = (val) => {
        setMobileNav(val)
    }

    const urlPrefix = isEnglish ? 'en/' : '';
    const urlReversed = isEnglish ? '/' : '/en/';
    const aProposTxt = isEnglish ? 'Who we are' : 'A propos';
    const projetsRealisesTxt = isEnglish ? 'The story so far' : 'Projets réalisés';
    const projetsTxt = isEnglish ? 'Current projects' : 'Projets en cours';
    

    return (
        <StyledNav>
            <Link to='/'>
                <img className='logo' src={logo?.publicURL}/>
            </Link>
            <ul className={`mainUl ${MobileIsOpen ? 'open' : 'closed'}`}>
                    <AniLink to={`/${urlPrefix}`}>
                        <li>
                            {aProposTxt}
                        </li>
                    </AniLink>
                <AniLink to={`/${urlPrefix}${isEnglish ? 'completed-projects' : 'projets-realises'}`}>
                    <li>
                        {projetsRealisesTxt}
                    </li>
                </AniLink>
                <li  onMouseOver={() => toggleNav(true)} onMouseOut={() => toggleNav(false)}>
                    <div className="projectTrigger">
                        {projetsTxt}
                        <ul className={`${isOpen? 'open': ''}`}>
                            {
                                projets.edges.map((projet, i) =>{
                                    if (projet.node.country) {
                                        return(
                                        <AniLink to={`/${urlPrefix}project/${projet.node.slug}`}>
                                            <li key={i}>
                                                {isEnglish? projet?.node?.countryEng : projet?.node?.country}
                                            </li>
                                        </AniLink>
                                    )} else {
                                        return null;
                                    }
                                })
                            }
                        </ul>
                    </div>
                </li>
                <AniLink to={`${urlReversed}`}>
                    <li className="lang-li">
                        {isEnglish ? 'Français' : 'English'}
                    </li>
                </AniLink>
            </ul>
            <div className="burger-opener" onClick={() => toggleMobileNav(!MobileIsOpen)}>
                <div></div>
                <div></div>
            </div>
        </StyledNav>
    )
}

export default Menu
