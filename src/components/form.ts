import styled, { css } from "styled-components";

export const FormErrorMessage = styled.span`
    display: block;
    color: #c53030;
    padding: 10px 0;
    width: 100%;
`;

export const Title = styled.h1`
    max-width: 60%;
`;

const RepositoryForm = styled.form<{ hasError: boolean }>`
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;

    .name{
        flex: 1;
        line-height: 60px;
        border-radius: 5px 0 0 5px;
        padding-left: 10px;
        border: 2px solid #fff;
        
        ${props => props.hasError && css`
            border-color: #c53030
        ` }
    }

    button[type="submit"]{
        padding: 0 35px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        color: #fff;
        transition: background 0.1s, filter 0.1s;

        &:hover{
            background: #009443;
            cursor: pointer;
        }
        
        &:active{
            filter: brightness(1.4);
            cursor: pointer;
        }
    }
`;

export default RepositoryForm;