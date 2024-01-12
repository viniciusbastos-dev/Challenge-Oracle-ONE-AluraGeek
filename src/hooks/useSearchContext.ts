import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error(
            "useSearchContext deve ser usado dentro de um SearchProvider"
        );
    }

    const { searchValue, setSearchValue } = context;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return { searchValue, handleSearchChange };
};
