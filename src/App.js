import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route 
            render={({location}) => (
                <div></div>
            )}
            />
        </Switch>
    )
}

export default App;