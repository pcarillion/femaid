import styled from 'styled-components'

export const StyledProjectMain = styled.div`
    margin-top: 140px;
    width: 100vw;
    .container {
        max-width: 1400px;
        display: block;
        margin: auto;
        padding: 0 50px;
        h1 {
            text-align: center;
        }
        a {
            font-weight: 700;
            text-decoration: underline;
        }
        .video-in-article {
            margin: 20px 0;
            iframe {
                display: block;
                margin: 0 auto;
            }
        }
    }
`