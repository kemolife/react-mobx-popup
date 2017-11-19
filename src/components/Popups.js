import React from "react";
import {observer} from "mobx-react";
import Popup from "./index";
import {Provider} from "mobx-react";
import {storePopups} from "./index";
import Button from "./Button"

storePopups.show({
    title: 'I am special',
    className: 'xxxx',
    content: <h2>xxx</h2>,
    show: function () {
      console.log('cool');
    },
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

storePopups.show({
    title: 'I am llll',
    className: 'xxx',
    content: <Button />,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

@observer
class Popups extends React.Component {
    render() {
        return (
            <div>
                {storePopups.popups.map((popup, key) =>
                    <div key = {key}>
                        <Provider storePopups = {storePopups} >
                            <Popup {...popup} keyPopup={key}/>
                        </Provider>
                    </div>
                )}
            </div>
        )
    }
}

export default Popups

