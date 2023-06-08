import { Component } from "react";

export default class Counter extends Component{

    state = {counter:0};

    add1 = () => {
        if (this.state.counter<=4){
            this.setState({counter:this.state.counter+1});
        }
        else {
            this.setState({counter:0});
        }
    }

render() {
    return (
        <div>
            <h2 className="text-success text-decoration-underline"> assignment 1:</h2>
            <h2> Counter : {this.state.counter}</h2>
            <button onClick={this.add1} > + </button>
        </div>
    )
}


}
