import React from "react";
import Header from "../components/Header";
import { SearchProvider } from "../contexts/SearchContext";
import { Outlet } from "react-router-dom";

const Base: React.FC = () => {
    return (
        <>
            <SearchProvider>
                <Header />
                <Outlet />
            </SearchProvider>
        </>
    );
};

export default Base;
