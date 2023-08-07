import React from "react";
import {BrowserRouter} from "react-router-dom"
import Collection from "./Collection";

const App = (props) => {
    return <BrowserRouter>
    <Collection />
    </BrowserRouter>

}

export default App
