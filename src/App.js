import React, { Component } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchTickets} from './store/actions/TicketActions'
import Home from "./view/Home";
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';

class App extends Component{

    componentDidMount() {
        store.dispatch(fetchTickets());
    }
    render () {
        return (
            <Provider store={store}>
                <Header />
                <Router>
                    <Route exact path="/" component={Home} />
                </Router>
                <Footer />
            </Provider>

        );
    }
}
export default App;
