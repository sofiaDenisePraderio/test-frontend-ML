import React, { useState } from "react";
import Logo from "./Logo";
import Input from "./Input";

function SearchBar({ handleChange, value, onSubmit }) {
    return (
        <div className="nav-bar">
            <div className="search-bar">
                <Logo />
                <Input
                    handleChange={handleChange}
                    value={value}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
}
export default SearchBar;
