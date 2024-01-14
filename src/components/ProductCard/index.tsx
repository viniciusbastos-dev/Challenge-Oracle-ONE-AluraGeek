import React from "react";
import * as S from "./ProductCard";
interface ProductCardProps {
    id: number;
    name: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => {
    return (
        <S.ProductContainer>
            <S.ProductImage src="/products/product-1.png" alt={`${id}`} />
            <S.ProductName>{name}</S.ProductName>
            <S.ProductPrice>R$ {price.toFixed(2)}</S.ProductPrice>
            <S.ProductLink href="">Ver produto</S.ProductLink>
        </S.ProductContainer>
    );
};

export default ProductCard;
