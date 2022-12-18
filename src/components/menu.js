import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { StyledNav } from '../styles/menu'
import Project from '../templates/Project'

const getData = graphql`
query  {
    projets: allContentfulFemaidProject {
        edges {
          node {
            slug
            country
          }
        }
    }
    logo: file(name: {eq: "femaid-logo"}) {
        publicURL
    }
}
`

const Menu = () => {
    const {logo, projets}  = useStaticQuery(getData)    

    const [isOpen, setNav] = useState(false)

    const [MobileIsOpen, setMobileNav] = useState(false)

    const toggleNav = (val) => {
        setNav(val)
    }

    
    const toggleMobileNav = (val) => {
        setMobileNav(val)
    }

    

    return (
        <StyledNav>
            <Link to='/'>
                <img className='logo' src={logo?.publicURL}/>
            </Link>
            <ul className={`mainUl ${MobileIsOpen ? 'open' : 'closed'}`}>
                <li>
                    <AniLink to="/">A Propos</AniLink>
                </li>
                <li>
                    <AniLink to="/projets-realises">
                        Projets réalisés
                    </AniLink>
                </li>
                <li  onMouseOver={() => toggleNav(true)} onMouseOut={() => toggleNav(false)}>
                    <div className="projectTrigger">
                        Projets en cours
                        <ul className={`${isOpen? 'open': ''}`}>
                            {
                                projets.edges.map((projet, i) =>{
                                    if (projet.node.country) {
                                        return(
                                        <li key={i}>
                                        <AniLink to={`/project/${projet.node.slug}`}>{projet.node.country}</AniLink>
                                        </li>
                                    )} else {
                                        return null;
                                    }
                                })
                            }
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="burger-opener" onClick={() => toggleMobileNav(!MobileIsOpen)}>
                <div></div>
                <div></div>
            </div>
        </StyledNav>
    )
}

export default Menu
