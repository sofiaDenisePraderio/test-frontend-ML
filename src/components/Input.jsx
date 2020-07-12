import React from "react";
import { FiSearch } from "react-icons/fi";
import { withRouter } from "react-router";

function Input({ handleChange, value, onSubmit, history }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/");
        onSubmit();
    };
    return (
        <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
            <input
                className="input-search"
                type="search"
                placeholder="Nunca dejes de buscar"
                value={value}
                onChange={(e) => handleChange(e)}
            />
            <button className="btn btn-search" type="submit">
                <FiSearch />
            </button>
        </form>
    );
}
export default withRouter(Input);
