import styled from "styled-components";

export const Container = styled.section`
    font-family: Raleway;
    padding-top: 4rem;
`;

export const Wrapper = styled.div`
    max-width: 1136px;
    margin: 0 auto;
    padding: 0 32px;

    @media screen and (max-width: 480px) {
        padding: 0 16px;
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const MoreText = styled.p`
    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

export const More = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #2a7ae4;
    font-weight: 700;
`;

export const ProductWrapper = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 1199px) {
        & > *:nth-child(n + 6) {
            display: none;
        }
    }
    
    @media screen and (max-width: 950px) {
        & > *:nth-child(n + 5) {
            display: none;
        }
    }
`;
