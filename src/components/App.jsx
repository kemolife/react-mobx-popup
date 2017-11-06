import React from "react";
import Popup from "./Popup";
import store from "../store/PopupStore";

let mySpecialPopup = store.register({
    title: 'I am special',
    content: 'Since I am special you might need me again later. Save me!',
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
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#popup" onClick={this.openPopup}>Popup</button>
                {this.state.showPopup?<Popup store={store.getDataPopup(mySpecialPopup)} />:null}
            </div>
        )
    }
}