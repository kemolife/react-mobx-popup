import React, {PropTypes} from "react";
import {observer, inject} from "mobx-react";
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

@inject("myPopup") @observer
class Popup extends React.Component {

    constructor(props) {
        super(props);
    }

    className(className) {
        return `${this.props.className}__${className}`;
    }

    render() {
        return (
            <div>
                {this.props.myPopup.popups.map((popup, key) =>
                    <div key={key} id={this.props.id} className={"modal " + this.className('popup')} style={
                        {
                            display: "block",
                            "z-index": key * 10,
                            "padding-top": key * 15,
                            "background": key != 0 ? "rgba(0,0,0,0.3)" : ""
                        }
                    }>
                        <div className={"modal-dialog " + this.className('dialog')}>
                            <div className={"modal-content " + this.className('content')}>
                                <PopupHeader title={popup.title} className={this.className('header')}/>
                                <PopupContent content={popup.content}/>
                                <PopupFooter className={this.className('footer')}/>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>)

    }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
export default Popup;
