import React, {PropTypes} from "react";
import {observer} from "mobx-react";
import PopupHeader from "./PopupHeader";
import PopupContent from "./PopupContent";
import PopupFooter from "./PopupFooter";

const propTypes = {
    className: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired,
    closeBtn: PropTypes.bool,
    closeHtml: PropTypes.string,
    defaultOk: PropTypes.string,
    defaultCancel: PropTypes.string,
    wildClasses: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
};

const defaultProps = {
    id: 'popup',
    className: 'popup',
    btnClass: 'popup__btn',
    closeBtn: true,
    closeHtml: null,
    defaultOk: 'Ok',
    defaultCancel: 'Cancel',
    wildClasses: false,
    closeOnOutsideClick: true,
};

@observer
class Popup extends React.Component {

    constructor(props)
    {
        super(props);
        const {title, content} = props.store;
    }

    className(className) {
        return `${this.props.className}__${className}`;
    }

    render() {
        return (
            <div id={this.props.id} className={"modal fade "+this.className('popup')} role="dialog">
                <div className={"modal-dialog "+this.className('dialog')}>
                    <div className={"modal-content "+this.className('content')}>
                        <PopupHeader title={title} className={this.className('header')}/>
                        <PopupContent />
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
