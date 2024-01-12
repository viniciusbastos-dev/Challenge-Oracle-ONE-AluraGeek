import React, {
    createContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

interface SearchContextProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
    undefined
);

SearchContext.displayName = "Search";

interface SearchProviderProps {
    children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    );
};
