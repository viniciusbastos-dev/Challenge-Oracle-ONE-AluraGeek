import styled from "styled-components";

export const Container = styled.section`
    align-items: center;
    background: url(banner-image.png) center/cover no-repeat;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-family: Raleway;
    font-weight: 700;
    height: 352px;
    justify-content: flex-end;
    padding: 32px;

    @media screen and (max-width: 768px) {
        height: 192px;
        padding: 16px;
    }
`;

export const Title = styled.h2`
    font-size: 3.25rem;

    @media screen and (max-width: 768px) {
        font-size: 1.375rem;
    }
`;

export const Description = styled.p`
    font-size: 1.375rem;

    @media screen and (max-width: 768px) {
        font-size: .875rem;
    }
`;

export const Wrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 80%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
