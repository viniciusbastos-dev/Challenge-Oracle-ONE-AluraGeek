import React from "react";
import * as S from "./SearchBar";
import { useSearchContext } from "../../hooks/useSearchContext";

const SearchBar: React.FC = () => {
    const { searchValue, handleSearchChange } = useSearchContext();

    return (
        <>
            <S.Container>
                <S.SearchInput
                    placeholder="O que deseja encontrar?"
                    onChange={handleSearchChange}
                    value={searchValue}
                />
                <S.SearchButton type="submit" aria-label="Pesquisar">
                    <S.IconWrapper>
                        <S.SearchIcon
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                        >
                            <path d="M15.5001 14H14.7101L14.4301 13.73C15.6301 12.33 16.2501 10.42 15.9101 8.39002C15.4401 5.61002 13.1201 3.39002 10.3201 3.05002C6.09014 2.53002 2.53014 6.09001 3.05014 10.32C3.39014 13.12 5.61014 15.44 8.39014 15.91C10.4201 16.25 12.3301 15.63 13.7301 14.43L14.0001 14.71V15.5L18.2501 19.75C18.6601 20.16 19.3301 20.16 19.7401 19.75C20.1501 19.34 20.1501 18.67 19.7401 18.26L15.5001 14ZM9.50014 14C7.01014 14 5.00014 11.99 5.00014 9.50002C5.00014 7.01002 7.01014 5.00002 9.50014 5.00002C11.9901 5.00002 14.0001 7.01002 14.0001 9.50002C14.0001 11.99 11.9901 14 9.50014 14Z" />
                        </S.SearchIcon>
                    </S.IconWrapper>
                </S.SearchButton>
            </S.Container>
        </>
    );
};

export default SearchBar;