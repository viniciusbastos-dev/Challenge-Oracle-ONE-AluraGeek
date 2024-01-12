import styled from "styled-components";

export const Container = styled.div`
    border-radius: 20px;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    gap: 8px;
    padding: 8px 16px;
    background-color: #f5f5f5;
    width: 393px;

    @media screen and (max-width: 768px) {
        width: 272px;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    font-family: Raleway;
    outline: 0;
    border: none;
    width: 100%;
    background: transparent;
    font-size: 14px;
    &::placeholder {
        color: #a2a2a2;
    }
`;
export const SearchButton = styled.button`
    outline: 0;
    border: none;
    background: transparent;
    cursor: pointer;
`;

export const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
    color: #a2a2a2;
`;

export const SearchIcon = styled.svg`
    width: 100%;
    height: 100%;
    fill: currentColor;
`;
