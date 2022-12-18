import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 100%;
    padding: 20px 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .logo {
        height: 30px;
        margin-bottom: 0;
        min-width: 120px;
    }
    ul.mainUl {
        /* width: 50%; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        li {
            background-color: white;
            box-shadow: inset 0 0 0 0 black;
            color: black;
            transition: color .3s ease-in-out, background-color .2s ease-in-out;
            text-align: center;
            width: 290px;
            padding: 10px 5px;
            margin: 0;
            &:hover {
                color: white;
                background-color: black;
                cursor: pointer;
            }
        }
        .projectTrigger {
            position: relative;
            ul {
                position: absolute;
                left: 0;
                top: calc(100% + 10px);
                margin-left:-5px;
                max-width: 0;
                display: none;
                &.open {
                    display: block;
                    max-height: 1000px;
                }
            }
        }
    }
    .burger-opener {
        display: none;
    }
    @media screen and (max-width: 1000px) {
        padding: 24px;
        position: relative;
        border-bottom: 0.5px solid gray;
        ul.mainUl {
            &.closed {
                display: none;
            } 
            position: absolute;
            width: 100vw;
            bottom: -150%;
            left: 0;
            flex-direction: column;
            li {
                width: 100vw;
            }
            ul.open {
                background-color: white;
                li:last-child {
                    border-bottom: 0.5px solid gray;

                }
            }
            border-bottom: 0.5px solid gray;
        }
        .burger-opener {
            display: block;
            width: 30px;
            height: 20px;
            position: relative;
            div {
                height: 3px;
                width: 30px;
                position: absolute;
                background-color: black;
                &:first-child {
                    top: 0;
                    left: 0;
                }
                &:last-child {
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
`