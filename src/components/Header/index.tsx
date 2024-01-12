import React from "react";
import * as S from "./Header";
import SearchBar from "../SearchBar";
import Button from "../Button";

const Header: React.FC = () => {
    return (
        <>
            <S.Header>
                <S.Wrapper>
                    <S.Logo src="logo.svg" alt="Logo do AluraGeek" />
                    <SearchBar />
                </S.Wrapper>
                <Button secondary text="Login" />
            </S.Header>
        </>
    );
};

export default Header;
