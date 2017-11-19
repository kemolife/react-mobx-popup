import React from "react";
import {observer} from "mobx-react";

const defaultProps = {
    title: null,
    className: null,
};

@observer
class PopupHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"modal-header "+this.props.className}>
                <button type="button" className="close" data-dismiss="modal" onClick={this.props.onClick}>&times;</button>
                <h4 className={"modal-title "+this.props.className + '__title'}>{this.props.title}</h4>
            </div>
        )
    }
}

PopupHeader.defaultProps = defaultProps;
export default PopupHeader