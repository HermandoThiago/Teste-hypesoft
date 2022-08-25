import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;

    p{
        margin-left: 15px;
        font-weight: 500;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        flex-direction: row;
        align-items: center;
        justify-content: center;

        div{
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        p{
            margin: 0 auto;
        }

    }

`;
