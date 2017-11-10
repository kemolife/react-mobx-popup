import React from "react";
import Popup from "./Popup";
import store from "../store/PopupStore";

let mySpecialPopup = store.register({
    title: 'I am special',
    content: <h2>xxx</h2>,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

export default class App extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            showPopup : false
        };
        this.openPopup = this.openPopup.bind(this);
    }

    openPopup()
    {
        this.setState({showPopup: true})
    }

    render(){
        return (
            <div>
                <button type="button" className="btn btn-info btn-lg" onClick={this.openPopup}>Popup</button>
                {this.state.showPopup?<Popup {...store.getDataPopup(mySpecialPopup)} />:null}
            </div>
        )
    }
}