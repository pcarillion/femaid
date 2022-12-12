import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 100%;
    padding: 20px 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .logo {
        height: 30px;
        margin-bottom: 0;
    }
    ul.mainUl {
        width: 50%;
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
            width: 150px;
            padding: 5px;
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
                top: calc(100% + 5px);
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
`