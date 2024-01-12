import styled from "styled-components";

interface ButtonProps {
    isSecondary?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-family: Raleway;
    padding: 16px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    ${(props) =>
        props.isSecondary
            ? `
        width: 182px;
        color: #2a7ae4;
        background-color: #FFF;
        border: 1px solid #2a7ae4;
        
        &:hover {
            background-color: #D4E4FA;
        }

        @media screen and (max-width: 768px) {
            width: 166px;
        }

        @media screen and (max-width: 360px) {
            width: 133px;
        }
        `
            : `
        border: none;
        color: #FFF;
        background-color: #2A7AE4;

        &:hover {
            background-color: #5595E9;
        }
        `}
`;
