import React from "react";
import * as S from "./Banner";
import Button from "../Button";

const Banner = () => {
    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <S.Title>Dezembro Promocional</S.Title>
                    <S.Description>
                        Produtos selecionados com 33% de desconto
                    </S.Description>
                    <Button text="Ver Consoles" />
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Banner;
