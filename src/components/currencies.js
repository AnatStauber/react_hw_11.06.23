import { Component,createRef } from "react";

export default class Currencies extends Component{


    state = {totalCost:"!"};
    inputRef = createRef()
    selectRef = createRef()
    

    changeAmount = () => { 
        let total = this.selectRef.current.value*this.inputRef.current.value
            this.setState({totalCost:total});
            let e = document.getElementById("result_id");
            if (total>0){
                e.style.display="block";
            } else {
                e.style.display="none";
            }
    }


  
    
    render() {
        return (
            <div>
                <h2 className="text-success text-decoration-underline"> assignment 5:  </h2>
                <br></br>
                <h5> Enter the currency you want to exchange: </h5>
                <select id="selectCurrency_id" ref={this.selectRef} onChange={this.changeAmount} >
                        <option value="0">
                        Currencies:
                        </option>
                        <option value="3.6">USD</option>
                        <option value="3.9">EUR</option>
                        <option value="0.1">TGB</option>
                    </select>
                <br></br>
                <h5>Enter the amount you want to exchange: </h5>
                <input onInput={this.changeAmount} ref={this.inputRef} type="text" />
                <br></br>
                <h5 id="result_id" style={{"display":"none"}}> The total exchange cost: {this.state.totalCost} ILS</h5>
            </div>
        )
    }

}