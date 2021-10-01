import { Component } from "react";
import Product from "./product";

const styles = {
    products: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
};

class Products extends Component {
    render() {
        const { products, addToCar } = this.props;

        return (
            <div style={styles.products}>
                {products.map((product) => (
                    <Product
                        addToCar={addToCar}
                        key={product.name}
                        product={product}
                    />
                ))}
            </div>
        );
    }
}

export default Products;