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
    content: PropTypes.string,
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
        this.state = {
            id: 'id' in props.store ? props.store.id : props.id,
            title: 'title' in props.store ? props.store.title : props.title,
            className: 'className' in props.store ? props.store.className : props.className,
            buttons: props.store.buttons ? props.store.buttons : props.buttons,
            content: props.store.content ? props.store.content : props.content,
            visible: props.store.visible ? props.store.visible : props.visible,
            noOverlay: props.store.noOverlay ? props.store.noOverlay : props.noOverlay,
            position: props.store.position ? props.store.position : props.position,
            closeOnOutsideClick: props.store.closeOnOutsideClick ? props.store.closeOnOutsideClick : props.position,
        }
    }

    className(className) {
        return `${this.state.className}__${className}`;
    }

    render() {
        return (
            <div id={this.state.id} className={"modal " + this.className('popup')} style={{display: "block"}}>
                <div className={"modal-dialog " + this.className('dialog')}>
                    <div className={"modal-content " + this.className('content')}>
                        <PopupHeader title={this.state.title} className={this.className('header')}/>
                        <PopupContent content = {this.state.content}/>
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
