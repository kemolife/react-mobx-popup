import React from "react";
import {Provider} from "mobx-react";
import {render} from "react-dom";
import DevTools from "mobx-react-devtools";
import Popup, {storePopup} from "./components";

storePopup.show({
    title: 'I am special',
    className: 'xxxx',
    content: <h2>xxx</h2>,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

storePopup.show({
    title: 'I am xxxx',
    content: <h2>xxx</h2>,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

storePopup.show({
    title: 'I am llll',
    content: <h2>llllll</h2>,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});
storePopup.show({
    title: 'I am xuy',
    content: <h2>xuy</h2>,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

render(
    <div>
        <DevTools/>
        <Provider myPopup = {storePopup}>
            <Popup />
        </Provider>
    </div>,
    document.getElementById("app")
);
