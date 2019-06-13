import React, { Component } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchTickets} from './store/actions/TicketActions'
import Home from "./view/Home";
import './App.css';



class App extends Component{

    componentDidMount() {
        store.dispatch(fetchTickets());
    }
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Home} />
                </Router>
            </Provider>
        );
    }
}



export default App;
