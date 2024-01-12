import Header from "./components/Header";
import { SearchProvider } from "./contexts/SearchContext";

const App = () => {
    return (
        <>
            <SearchProvider>
                <Header />
            </SearchProvider>
        </>
    );
};

export default App;
