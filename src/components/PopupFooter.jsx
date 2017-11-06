import React from "react";

const defaultProps = {
    className: null,
};

class PopupFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"modal-footer "+this.props.className}>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        )
    }
}

PopupFooter.defaultProps = defaultProps;
export default PopupFooter
