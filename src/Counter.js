import React from "react";

class Counter extends React.Component {
  constructor(props){
    super(props);

    this.state = {counter: 5};
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement(){
    // console.log( this.state.counter);
    this.setState((currState) => {
      return {counter: currState.counter - 1};
    });
  }

  handleIncrement(){
    this.setState((currState) => {
      return {counter: currState.counter + 1};
    });
  }

  render(){
    const date = new Date("27 July 2027");
    date.setDate(date.getDate() + this.state.counter);

    return <div>
      <button onClick={this.handleDecrement}>-</button>
      <span>{date.toDateString()} [{this.state.counter}]</span>
      <button onClick={this.handleIncrement}>+</button>
    </div>
  }
}

export default Counter;