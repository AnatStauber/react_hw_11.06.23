import { Component } from "react";

export default class Gallery extends Component{


    
    state = {counter:0};

    images_ar = ["images/parrot.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg"];
    
    next = () => {
        if (this.state.counter<=2){
            this.setState({counter:this.state.counter+1});
        }
        else{
            this.setState({counter:0});
        }
    }

    back = () => {
        if (this.state.counter>=1){
            this.setState({counter:this.state.counter-1});
        } else {
            this.setState({counter:3})
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-success text-decoration-underline"> assignment 2:</h2>
               <br></br>
                <div >
                   
                    <br></br>
                <div className="d-flex justify-content-between">
                <button  onClick={this.back}> &lt; </button>
                
                    <img className="col-4" src={this.images_ar[this.state.counter]} alt="pic"></img>
                    
                <button  onClick={this.next}> &gt; </button>
                </div>
                </div>
            </div>
        )
    }
}