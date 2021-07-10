import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from '../../pages/Home'
import Login from '../../pages/Login'
import MainApp from '../../pages/MainApp'
import Register from '../../pages/Register'

const Routes = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <MainApp />
                    </Route>
                </Switch>
            </Router>
    )
}

export default Routes
