import styled from 'styled-components';
import { StyledBox } from '../Box/style';

export const StyledContact = styled(StyledBox)`
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 100px 20px;
    }
`;

export const StyledContainerContact = styled(StyledBox)`
    background-color: #fff;
    border-radius: 6px;
    
    p{
        font-size: 2rem;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg{
        margin-left: 10px;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }

`;

export const StyledContainerInfo = styled(StyledBox)`
    background-color: #fff;
    border-radius: 6px;
    margin-left: 2%;
    
    p{
        font-size: 2rem;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        margin: 10px auto;
    }
`;

export const MediumInput = styled.input`
    width: 49%;
    border: 1px solid #DFE3EB;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: lighter;
    border-radius: 4px;
    color: black;

    :focus{
        outline: 1px solid #ED1CA6;
    }

    ::placeholder{
        color: black;
    }
`;

export const FullInput = styled.input`
    width: 100%;
    border: 1px solid #DFE3EB;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: lighter;
    border-radius: 4px;
    margin-top: 10px;
    color: black;

    :focus{
        outline: 1px solid #ED1CA6;
    }

    ::placeholder{
        color: black;
    }
`;

export const FullTextArea = styled.textarea`
    width: 100%;
    height: 150px;
    border: 1px solid #DFE3EB;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: lighter;
    border-radius: 4px;
    margin-top: 10px;
    resize: none;
    color: black;

    :focus{
        outline: 1px solid #ED1CA6;
    }

    ::placeholder{
        color: black;
    }
`;
