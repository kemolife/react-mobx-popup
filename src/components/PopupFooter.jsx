import React from "react";
import {observer} from "mobx-react";

const defaultProps = {
    className: null
};

@observer
class PopupFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"modal-footer "+this.props.className}>
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onClick}>Close</button>
            </div>
        )
    }
}

PopupFooter.defaultProps = defaultProps;
export default PopupFooter
