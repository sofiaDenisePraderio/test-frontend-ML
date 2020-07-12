import React from "react";
import { withRouter } from "react-router";

function Product({ item, handleClick, history }) {
    const goToDetail = (e) => {
        e.preventDefault();
        history.push(`/${item.id}`);
    };

    const numberIdenter = (number) => {
        return number
            .toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })
            .replace(",", ".");
    };

    return (
        <div
            key={item.id}
            className="card-click product-card"
            onClick={(e) => goToDetail(e)}
        >
            <div className="card-image">
                <img src={item.thumbnail} alt={item.title} />
            </div>
            <div>
                <p className="card-price">
                    {`$
                    ${numberIdenter(item.price)}`}
                </p>
                <p className="card-title">{item.title}</p>
            </div>
            <p className="card-location">{item.address.state_name}</p>
        </div>
    );
}

export default withRouter(Product);
