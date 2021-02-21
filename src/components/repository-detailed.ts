import styled from "styled-components";

export const RepositoryDetail = styled.div`
    display: flex;
    background: transparent;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    flex-wrap: wrap;
    
    img {
        flex: 1;
        max-width: 64px;
        border-radius: 50%;
    }

    .details{
        padding: 0 10px 0 20px;
        display: flex;
        min-height: 64px;
        align-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 1;
        width: 100%;

        strong {
            font-size: 20px;
            flex: 1;
        }

        p {
            font-size: 12px;
            width: 100%;
        }
    }

    .numbers{
        padding: 30px 0;
        width: 100%;

        ul{
            display: flex;
            
            &>li{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                b {
                    width: 100%;
                    font-size: 22px;
                }

                p {
                    color: #808080;
                    font-size: 13px;
                }

                &+li {
                    margin-left: 30px;
                }
            }
        } 
    }
`;

export const RepositoryIssue = styled.div`
    box-shadow: 6px 6px 11px -1px rgba(2, 2, 2, 0.06);
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    left: 0px;
    position: relative;
    transition: left 0.1s, right 0.1s, position 0.1s;
    flex-wrap: wrap;

    &:hover{
        left: 5px;
    }

    &+.issue{
        margin-top: 10px;
    }

    a:first-child {
        color: #000;
        display: flex;
        text-decoration: none;
    }
    
    img {
        flex: 1;
        max-width: 64px;
        border-radius: 50%;
    }

    .details{
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;

        strong {
            padding: 5px 0;
        }

        p {
            font-size: 12px
        }
    }
`;