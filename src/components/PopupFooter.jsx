import React from "react";
import {inject, observer} from "mobx-react";

const defaultProps = {
    className: null
};

@inject("storePopups") @observer
class PopupFooter extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClose = this.handlerClose.bind(this)
    }

    handlerClose(){
        this.props.storePopups.closePopup();
    }

    render() {
        return (
            <div className={"modal-footer "+this.props.className}>
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handlerClose}>Close</button>
            </div>
        )
    }
}

PopupFooter.defaultProps = defaultProps;
export default PopupFooter
