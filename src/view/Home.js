import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';
import TicketsList from '../components/TicketsList'
import {fetchTickets} from '../store/actions/TicketActions';
import '../stylesheets/ticket.css'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTicketsData: null
        };
      }
    

    componentWillMount(){
        
        this.setState({currentTicketsData: this.props.tickets})
    }

    componentWillReceiveProps(newProps) {
        
    }

    componentWillUpdate(){
        if(this.state.currentTicketsData !== this.props.tickets){
            this.setState({ currentTicketsData: this.props.tickets}) 
        }
    }

  render() {


    let nextButton;
    let prevButton;
    let tickets;


    if (this.props.nextPageUrl !== null) {
      nextButton = <button onClick={() => {this.props.getNextPage(this.props.nextPageUrl)}}> Next </button>;
    } 
    
    if(this.props.prevPageUrl !== null){
      prevButton = <button onClick={() => this.props.getPrevPage(this.props.prevPageUrl)}> Previous </button>;
    }


    

    return (
            <div>
             <TicketsList tickets={this.props.tickets} />
             {prevButton}
             {nextButton}
             </div>
       
    );
  }
}

Home.PropType = {
    tickets: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    tickets: state.tickets.ticketItems,
    nextPageUrl: state.tickets.nextPageUrl,
    prevPageUrl: state.tickets.prevPageUrl
});

const mapDispatchToProps = dispatch => {
    return {
        getNextPage: nextPageUrl => {
          dispatch(fetchTickets(nextPageUrl));
        },
        getPrevPage: prevPageUrl => {
            dispatch(fetchTickets(prevPageUrl))
        }
    }
}


export default connect(mapStateToProps , mapDispatchToProps ) (Home);