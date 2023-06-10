import { Component } from "react";

export default class Shows extends Component{


    shows_ar = ["images/friends.jpg","images/seinfeld.jpg","images/theGoodPlace.jpg"];

    state = {selected:""};

    handleChange = () => {
        let select = document.getElementById("selectShow_id");
        this.setState({selected:select.value});
        let img = document.getElementById("img_id");
        img.style.display = "block";
    }

    render() {
        return (
            <div>
                <h2 className="text-success text-decoration-underline"> assignment 4:  </h2>
                <br></br>
                <h2> Choose your favorite show: </h2>
                <select id="selectShow_id" defaultValue={"shows:"} onChange={this.handleChange} >
                        <option value="">
                        shows:
                        </option>
                        <option value="0">Friends</option>
                        <option value="1">Seinfeld</option>
                        <option value="2">The Good Place</option>
                    </select>
                <img id="img_id" className="col-4" style={{"display":"none"}} src={this.shows_ar[this.state.selected]}></img>
            </div>
        )
    }

}