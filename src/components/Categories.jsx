import React, { useState } from "react";

function Categories({ data }) {
    if (
        data &&
        data.filters &&
        data.filters.length &&
        data.filters[0].values[0].name
    ) {
        return (
            <div className="categories">
                <p>{data.filters[0].values[0].name}</p>
            </div>
        );
    } else {
        return null;
    }
}
export default Categories;
