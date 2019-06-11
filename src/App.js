import React, { Component } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchTickets} from './store/actions/TicketActions'
import Home from "./view/Home";
import './App.css';



class App extends Component{

    componentDidMount() {
        alert('dispatching action')
        store.dispatch(fetchTickets());
    }
    render () {
        return (
            <div className="App">
            <header className="App-header">
            <Provider store={store}>
                <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
                </Router>
            </Provider>
                
            </header>
            </div>
        );
    }
}



export default App;
