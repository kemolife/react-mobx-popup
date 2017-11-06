import React from "react";

class PopupContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-body">
                <p>Some text in the modal.</p>
            </div>
        )
    }
}

export default PopupContent
