import React, {PropTypes} from "react";
import {observer, inject} from "mobx-react";
import PopupHeader from "./PopupHeader";
import PopupContent from "./PopupContent";
import PopupFooter from "./PopupFooter";

@inject('storePopups') @observer
class Popup extends React.Component {
    static propTypes = {
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

    static defaultProps = {
        id: 'popup',
        title: null,
        buttons: {},
        content: null,
        visible: false,
        className: 'popup',
        noOverlay: false,
        position: {},
        closeOnOutsideClick: true,
        show: () => console.log('show'),
        shown: () => console.log('shown'),
        hide: () => console.log('hide'),
        hidden: () => console.log('hidden')
    };

    static hasClass(element, className){
        if (element.classList) {
            return !!className && element.classList.contains(className);
        }

        return (` ${element.className} `).indexOf(` ${className} `) > -1;
    };

    constructor(props) {
        super(props);
        this.handlerClose = this.handlerClose.bind(this);
        this.closeOutside = this.closeOutside.bind(this);
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

    closeOutside(e){
        if(this.props.closeOnOutsideClick && this.hasClass(e.target, this.className('popup'))) {
            return this.handlerClose()
        }
    }

    render() {
        const key = this.props.keyPopup;
        return (
            <div onClick={this.closeOutside} id={this.props.id} className={"modal " + this.className('popup')} style={
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

export default Popup;
