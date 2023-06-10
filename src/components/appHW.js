import { Component } from "react";
import Counter from "./counter";
import Gallery from "./gallery";
import Colors from "./colors";
import Shows from "./shows";
import Currencies from "./currencies";

export default class AppHW extends Component{
    render() {
        return (
            <div className="container row">
                <div>
                <Counter />
                <hr></hr>
                <Gallery />
                <hr></hr>
                <Colors />
                <hr></hr>
                <Shows />
                <hr></hr>
                <Currencies />
                </div>
            </div>
        )
    }
}