/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import TodoMain from "../component/todo/TodoMain";
import ErrorNotFound from "../component/error/ErrorNotFound";
import '../favicon.png'

import todoReducer from "../redux/TodoReducer";
import './App.css'
import Nav from "../component/util/Nav";
import AboutPage from "../component/about/AboutPage";
import ContactPage from "../component/contact/ContactPage";

const store = createStore(combineReducers({todoReducer}))

const App = props => {

    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-sm-3 col-sm-6">
                        <div className="navbar navbar-expand">
                            <Link className="navbar-brand" to="/">Todo</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <Nav link={{label: 'Home', path: '/'}}/>
                                    <Nav link={{label: 'About', path: '/about'}}/>
                                    <Nav link={{label: 'Contact', path: '/contact'}}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="offset-sm-3 col-sm-6">
                        <div>
                            <Switch>
                                <Route path="/contact" component={ContactPage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route exact path="/" component={TodoMain}/>
                                <Route component={ErrorNotFound}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default App

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
)