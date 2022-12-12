import styled from 'styled-components';

export const StyledPageContainer = styled.div`
    .container {
        max-width: 1400px;
        display: block;
        margin: 100px auto;
        padding: 0 100px;
        a {
            font-weight: 700;
        }
    }
`

export const StyledHomeBanner  = styled.section` 
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 90vh;
    position: relative;
    z-index: 10;
    .img {
        width: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    h1 {
        position: absolute;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 50px;
        top: 50%;
    }

`