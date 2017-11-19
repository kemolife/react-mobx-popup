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
    show: PropTypes.func,
    shown: PropTypes.func,
    hide: PropTypes.func,
    hidden: PropTypes.func,
    closeOnOutsideClick: PropTypes.bool
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
    show: function(){console.log('show')},
    shown: () => console.log('shown'),
    hide: () => console.log('hide'),
    hidden: () => console.log('hidden')
};

@inject('storePopups') @observer
class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.handlerClose = this.handlerClose.bind(this)
    }

    componentWillMount() {
       return this.props.show();
    }

    componentDidMount() {
        return this.props.shown()
    }

    componentWillUnmount() {
        return this.props.hidden()
    }

    className(className) {
        return `${this.props.className}__${className}`;
    }

    handlerClose(){
        this.props.hide();
        return this.props.storePopups.closePopup();
    }

    render() {
        const key = this.props.keyPopup;
        return (
            <div id={this.props.id} className={"modal " + this.className('popup')} style={
                {
                    display: "block",
                    zIndex: key * 10,
                    paddingTop: key * 15,
                    background: key != 0 ? "rgba(0,0,0,0.3)" : ""
                }
            }>
                <div className={"modal-dialog " + this.className('dialog')}>
                    <div className={"modal-content " + this.className('content')}>
                        <PopupHeader title={this.props.title} onClick = {this.handlerClose} className={this.className('header')}/>
                        <PopupContent content={this.props.content}/>
                        <PopupFooter className={this.className('footer')} onClick = {this.handlerClose}/>
                    </div>
                </div>
            </div>
        )
    }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
export default Popup;
