import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto'
    }

    body {
        background: #F0F0F5;
        margin: auto;
        max-width: 900px;
        padding: 20px 60px;

        .main-content{
            margin-top: 60px;
        }
    }
`