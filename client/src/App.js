import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
class App extends Component {
  state = {
    data,
    characters:"",
    fightersClicked:[],
    score:0,

  };

rearrange = array => {
  array.sort(() => Math.random() - 0.5);
}

handleClick = (name) =>{
  console.log(name)
  if(this.state.fightersClicked.includes(name)){
      this.setState({
        score:0
      })
  }
  else{
    this.setState({
      fightersClicked: this.state.fightersClicked.concat(name),
      score:this.state.score +1
    })
   this.rearrange(this.state.data)
  }
 
  // this.setState({ goku: this.state.goku +1 })
}
renderImages = () =>{
  return this.state.data.map(char => <img src={char.img} onClick={() => this.handleClick(char.name)}></img>)
}
  render() {
    console.log(data)
    return (
      <div className="App">
        <Navbar score ={this.state.score} />
        {this.renderImages()}
      </div>
    );
  }
}

export default App;
