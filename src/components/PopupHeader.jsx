import React from "react";
import {inject, observer} from "mobx-react";

const defaultProps = {
    title: null,
    className: null,
};

@inject("storePopups") @observer
class PopupHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClose = this.handlerClose.bind(this)
    }

    handlerClose(){
        this.props.storePopups.closePopup();
    }

    render() {
        return (
            <div className={"modal-header "+this.props.className}>
                <button type="button" className="close" data-dismiss="modal" onClick={this.handlerClose}>&times;</button>
                <h4 className={"modal-title "+this.props.className + '__title'}>{this.props.title}</h4>
            </div>
        )
    }
}

PopupHeader.defaultProps = defaultProps;
export default PopupHeader