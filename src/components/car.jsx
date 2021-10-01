import { Component } from "react";
import BubbleAlert from "./bubbleAlert";
import DetailsCar from "./detailsCar";

const styles = {
    car: {
        backgroundColor: "#359A2C",
        color: "#FFF",
        border: "none",
        padding: "15px",
        borderRadius: "15px",
        cursor: "pointer",
    },
    bubble: {
        position: "relative",
        left: 12,
        top: 20,
    },
};

class Car extends Component {
    render() {
        const { car, isCarVisible, showCar } = this.props;
        const cantidad = car.reduce((acc, el) => acc + el.cantidad, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
                </span>
                <button onClick={showCar} style={styles.car}>
                    Carro
                </button>
                {isCarVisible ? <DetailsCar car={car} /> : null}
            </div>
        );
    }
}

export default Car;
