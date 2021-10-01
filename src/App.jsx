import { Component } from "react";
import Products from "./components/products";
import Layout from "./components/layout";
import Title from "./components/title";
import Navbar from "./components/navbar";

class App extends Component {
    state = {
        products: [
            {
                name: "Tomato",
                price: 1500,
                img: "/products/tomate.jpg",
            },
            {
                name: "Peas",
                price: 2500,
                img: "/products/arbejas.jpg",
            },
            {
                name: "Lettuce",
                price: 500,
                img: "/products/lechuga.jpg",
            },
        ],

        car: [],

        isCarVisible: false,
    };

    addToCar = (product) => {
        const { car } = this.state;
        if (car.find((x) => x.name === product.name)) {
            const newCar = car.map((x) =>
                x.name === product.name
                    ? {
                          ...x,
                          cantidad: x.cantidad + 1,
                      }
                    : x
            );
            return this.setState({ car: newCar });
        }

        return this.setState({
            car: this.state.car.concat({ ...product, cantidad: 1 }),
        });
    };

    showCar = () => {
        if (!this.state.car.length) {
            return;
        }
        this.setState({ isCarVisible: !this.state.isCarVisible });
    };

    render() {
        const { isCarVisible } = this.state;
        return (
            <div>
                <Navbar
                    car={this.state.car}
                    isCarVisible={isCarVisible}
                    showCar={this.showCar}
                />
                <Layout>
                    <Title />
                    <Products
                        products={this.state.products}
                        addToCar={this.addToCar}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;
