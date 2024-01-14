import React from "react";
import * as S from "./ProductSection";
import ProductCard from "../ProductCard";

interface ProductSectionProps {
    title: string;
    products: {
        id: number;
        name: string;
        price: number;
    }[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <S.TopWrapper>
                        <S.Title>{title}</S.Title>
                        <S.More>
                            <S.MoreText>Ver mais</S.MoreText>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </S.More>
                    </S.TopWrapper>
                    <S.ProductWrapper>
                        {products.slice(0, 6).map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </S.ProductWrapper>
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default ProductSection;
