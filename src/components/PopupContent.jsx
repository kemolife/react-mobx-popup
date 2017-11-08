import React from "react";

class PopupContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-body">
                {this.props.content}
            </div>
        )
    }
}

export default PopupContent
