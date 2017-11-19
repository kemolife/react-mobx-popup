import React from "react";
import {render} from "react-dom";
import DevTools from "mobx-react-devtools";
import Popups from "./components/Popups";

render(
    <div>
        <DevTools/>
        <Popups />
    </div>,
    document.getElementById("app")
);
