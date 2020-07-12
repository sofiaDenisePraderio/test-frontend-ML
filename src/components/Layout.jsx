import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import ProductList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import Categories from "./Categories";

function Layout(props) {
    const [query, setQuery] = useState("");
    const [APIResults, setResults] = useState([]);

    const handleChange = (e) => setQuery(e.target.value);

    const searchProducts = (query) => {
        axios
            .get(
                `https://api.mercadolibre.com/sites/MLA/search?q=${query.trim()}`
            )
            .then((response) => response.data)
            .then((data) => setResults(data));
    };

    const handleSubmit = () => searchProducts(query);

    return (
        <BrowserRouter>
            <Route path="/">
                <SearchBar
                    handleChange={handleChange}
                    value={query}
                    onSubmit={handleSubmit}
                />
            </Route>
            <Route exact path="/">
                <ProductList data={APIResults} />
            </Route>
            <Route path="/:id">
                <Categories data={APIResults} />
                <ProductDetail />
            </Route>
        </BrowserRouter>
    );
}

export default Layout;
