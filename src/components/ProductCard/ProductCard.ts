import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ProductImage = styled.img`
    @media screen and (max-width: 1024px) {
        width: 164px;
    }

    @media screen and (max-width: 480px) {
        width: 156px;
    }
`;

export const ProductName = styled.h3`
    font-size: 0.875rem;
    font-weight: 500;
`;

export const ProductPrice = styled.p`
    font-weight: 700;
`;

export const ProductLink = styled.a`
    color: #2a7ae4;
    font-weight: 700;
    text-decoration: none;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;
