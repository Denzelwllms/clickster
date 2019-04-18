import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
class App extends Component {
  state = {
    character: 0,
  }
handleClick = (name) =>{
  console.log(name)
  // this.setState({ goku: this.state.goku +1 })
}
renderImages = () =>{
  return data.map(char => <img src={char.img} onClick={() => this.handleClick(char.name)}></img>)
}
  render() {
    console.log(data)
    return (
      <div className="App">
        <Navbar />
        {this.renderImages()}
      </div>
    );
  }
}

export default App;
