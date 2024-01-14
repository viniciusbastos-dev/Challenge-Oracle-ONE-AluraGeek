import React from "react";
import { v4 as uuidv4 } from "uuid";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";

const Home: React.FC = () => {
    const products = [
        {
            category: "Star Wars",
            items: Array.from({ length: 10 }, (_, index) => ({
                id: uuidv4(),
                name: `Star Wars Product ${index + 1}`,
                price: 19.99 + index * 5,
            })),
        },
        {
            category: "Consoles",
            items: Array.from({ length: 10 }, (_, index) => ({
                id: uuidv4(),
                name: `Console ${index + 1}`,
                price: 499.99 + index * 10,
            })),
        },
        {
            category: "Diversos",
            items: Array.from({ length: 10 }, (_, index) => ({
                id: uuidv4(),
                name: `Diverso Product ${index + 1}`,
                price: 79.99 + index * 3,
            })),
        },
    ];

    return (
        <>
            <Banner />
            {products.map((category) => (
                <ProductSection
                    key={category.category}
                    title={category.category}
                    products={category.items}
                />
            ))}
        </>
    );
};

export default Home;
