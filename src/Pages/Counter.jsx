import { Component } from "react";

class Counter extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
        nam: "Counter",
      };
    }
    inc = () => {
      this.setState({
        count: this.state.count + 1,
        nam: "Counter 1",
      });
    };
  
    dec = () => {
      const counter = this.state.count;
      this.setState({
        count: counter > 0 ? counter - 1 : counter,
        nam: "Counter",
      });
    };
    render() {
      return (
        <>
          <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center">
            <h1>{this.state.nam}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.inc} className="btn btn-outline-success mt-3 bolder">+</button>
            <button onClick={this.dec} className="btn btn-outline-warning mt-3 mx-3 bolder">-</button>
          </div>
        </>
      );
    }
  }
  export default Counter;