import styled from "styled-components";

export const Header = styled.header`
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 32px;
`;

export const Logo = styled.img`
    @media screen and (max-width: 768px) {
        width: 100px;
    }
`;
