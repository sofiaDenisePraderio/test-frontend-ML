import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

function ProductDetail(props) {
    const [detail, setDetailResults] = useState(null);
    const [detailDescription, setDetailDescription] = useState(null);
    const productId = props.match.params.id;
    let splitNumber = null;

    const condition = (c) => {
        if (c === "new") return "Nuevo";
        if (c === "used") return "Usado";
        return c;
    };

    const formatNumber = (number) => {
        const formattedNumber = number.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        splitNumber = formattedNumber.split(".");
    };

    const searchDetail = (productId) => {
        axios
            .get(`https://api.mercadolibre.com/items/${productId}`)
            .then((response) => response.data)
            .then((data) => {
                setDetailResults(data);
            });

        axios
            .get(`https://api.mercadolibre.com/items/${productId}/description`)
            .then((response) => response.data)
            .then((data) => {
                setDetailDescription(data);
            });
    };

    useEffect(() => {
        searchDetail(productId);
    }, []);

    if (detail && detailDescription) {
        formatNumber(detail.price);
        return (
            <div className="detail-container" style={{ marginTop: "16px" }}>
                <div className="detail-description">
                    <div className="detail-product">
                        <div className="detail-image">
                            <img
                                src={detail.pictures[0].url}
                                alt={detail.title}
                            />
                        </div>
                        <div className="detail-text">
                            <p className="detail-head-text">
                                Descripción del producto
                            </p>
                            <p className="detail-description-text">
                                {detailDescription.plain_text}
                            </p>
                        </div>
                    </div>
                    <div className="detail-buy">
                        <p className="detail-status">{`${condition(
                            detail.condition
                        )} - ${detail.sold_quantity} Vendidos`}</p>
                        <p className="detail-title">{detail.title}</p>
                        <p className="detail-price">
                            {" "}
                            {`$ ${splitNumber[0].replace(",", ".")}`}
                            <span className="detail-cents">
                                {" "}
                                {`${splitNumber[1]}`}
                            </span>
                        </p>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="detail-error">
                Hubo un error, inténtalo de nuevo...
            </div>
        );
    }
}

export default withRouter(ProductDetail);
