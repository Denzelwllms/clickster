import React from "react";
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Clickster</h1>
                <h3>Score:</h3>
                <h3>{this.props.score}</h3>
            </div>
        )
    }
}
export default Navbar;