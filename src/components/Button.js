import React from "react";
import {storePopups} from "./"

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handlerOpen = this.handlerOpen.bind(this)
    }

    handlerOpen(){
        storePopups.show({
            title: 'I am new',
            className: 'new',
            id: 'new_id',
            show: function () {

            },
            content: <Button />,
            buttons: {
                left: ['cancel'],
                right: ['ok']
            }
        })
    }

    render() {
        return (
            <div >
                <button type="button" onClick={this.handlerOpen}>New Popup</button>
            </div>
        )
    }
}

export default Button
