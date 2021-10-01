import { Component } from "react";
import Button from "./button";

const styles = {
    product: {
        border: "solid 1px #ddd",
        boxShadow: "0 5px 5px rgb(0, 0, 0, 0.3)",
        width: "30%",
        padding: "10px 15px",
        borderRadius: "5px",
    },

    img: {
        width: "100%",
    },
};

class Product extends Component {
    render() {
        const { product, addToCar } = this.props;
        return (
            <div style={styles.product}>
                <img alt={product.name} src={product.img} style={styles.img} />
                <h3>{product.name}</h3>
                <p>{product.price}$</p>
                <Button onClick={() => addToCar(product)}>
                    Agregar al carro
                </Button>
            </div>
        );
    }
}

export default Product;
