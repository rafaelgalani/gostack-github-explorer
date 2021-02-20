import styled from "styled-components";

const RepositoryCard = styled.div`
    box-shadow: 6px 6px 11px -1px rgba(2, 2, 2, 0.06);
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    left: 0px;
    position: relative;
    transition: left 0.1s, right 0.1s, position 0.1s;

    &:hover{
        left: 5px;
    }

    &+.repository{
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

        strong {
            padding: 5px 0;
        }

        p {
            font-size: 12px
        }
    }
`;

export default RepositoryCard;