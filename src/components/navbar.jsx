import { Component } from "react";
import Logo from "./logo";
import Car from "./car";

const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100px",
        justifyContent: "space-between",
        position: "relative",
        padding: "0 50px",
        boxShadow: "0 2px 3px rgb(0, 0, 0, 0.3)",
    },
};

class Navbar extends Component {
    render() {
        const { car, isCarVisible, showCar } = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Car car={car} isCarVisible={isCarVisible} showCar={showCar} />
            </nav>
        );
    }
}

export default Navbar;
