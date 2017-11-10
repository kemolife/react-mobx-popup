import React, {PropTypes} from "react";
import {observer} from "mobx-react";
import PopupHeader from "./PopupHeader";
import PopupContent from "./PopupContent";
import PopupFooter from "./PopupFooter";

const propTypes = {
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    title: PropTypes.string,
    buttons: PropTypes.object,
    content: PropTypes.object,
    visible: PropTypes.bool,
    position: PropTypes.object,
    closeOnOutsideClick: PropTypes.bool,
};

const defaultProps = {
    id: 'popup',
    title: null,
    buttons: {},
    content: null,
    visible: false,
    className: 'popup',
    noOverlay: false,
    position: {},
    closeOnOutsideClick: true,
};

@observer
class Popup extends React.Component {

    constructor(props) {
        super(props);
    }

    className(className) {
        return `${this.props.className}__${className}`;
    }

    render() {
        return (
            <div id={this.props.id} className={"modal " + this.className('popup')} style={{display: "block"}}>
                <div className={"modal-dialog " + this.className('dialog')}>
                    <div className={"modal-content " + this.className('content')}>
                        <PopupHeader title={this.props.title} className={this.className('header')}/>
                        <PopupContent content = {this.props.content}/>
                        <PopupFooter className={this.className('footer')}/>
                    </div>
                </div>
            </div>
        );
    }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
export default Popup;
