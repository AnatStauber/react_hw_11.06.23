import { Component } from "react";

export default class Colors extends Component{

state = {selected:" "};


handleChange = () => {
    let e = document.getElementById("select_id");
    let value = e.options[e.selectedIndex].value;
    this.setState({selected:value});
    console.log("state: " , this.state.selected);
    // let span = document.getElementById("id_span");
    // span.style.color = this.state.selected;
}


render() {
    
    return (
        <div>
            <h2 className="text-success text-decoration-underline"> assignment 3:  </h2>
            <br></br>
            <h2> Choose your favorite colors: <span style={{"color": this.state.selected}} id="id_span">{this.state.selected}</span> </h2>
            <select id="select_id" defaultValue={"color:"}
                onChange={this.handleChange} >
                <option  value="">
                colors:
                </option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="orange">orange</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                </select>
        </div>
    )
}
    }