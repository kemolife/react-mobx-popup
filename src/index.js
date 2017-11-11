import React from "react";
import {Provider} from "mobx-react";
import {render} from "react-dom";
import DevTools from "mobx-react-devtools";
import Popup, {storePopups} from "./components";
import Button from "./components/Button"

storePopups.show({
    title: 'I am special',
    className: 'xxxx',
    content: <h2>xxx</h2>,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});

storePopups.show({
    title: 'I am llll',
    content: <Button />,
    buttons: {
        left: ['cancel'],
        right: ['ok']
    }
});


render(
    <div>
        <DevTools/>
        <Provider storePopups = {storePopups}>
            <Popup />
        </Provider>
    </div>,
    document.getElementById("app")
);
