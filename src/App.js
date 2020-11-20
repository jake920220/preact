import React, {Fragment} from "react";
import { Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
        </Fragment>
    )
}

export default App;