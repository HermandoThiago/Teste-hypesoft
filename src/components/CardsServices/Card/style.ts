import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 23%; 
    background-color: #DFE3EB;
    border-radius: 6px;
    padding: 20px 20px;
    margin: 0 auto;
    cursor: pointer;
    color: black;

    p{
        font-size: 2rem;
        font-weight: light;
    }

    :hover{
        background-color: #fff;
        transition: .6s;

        svg{
            color: red;
        }
    }
`;
