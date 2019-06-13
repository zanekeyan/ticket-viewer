import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';
import TicketsList from '../components/TicketsList'
import {fetchTickets} from '../store/actions/TicketActions';
import Error from '../components/Error';
import TicketInfoModal from '../components/TicketInfoModal'
import DetailModal from '../components/TicketInfoModal';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTicketsData: null,
            showModal: false,
            currentlySelectedTicket: { 
                id: 'empty',
                subject: 'empty',
                description: ' ',
                created_at: ' ',
                updated_at: ' ',
                status: ' ',
                requester_id: ' ',
                submitter_id: ' ',
                assignee_id: ' ',
                organization_id: ' ',
                group_id: ' ',
            }
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
    let error;

    let modalClose = () => this.setState({ showModal: false });

    let modalShow = ticket_id => {
    
      this.setState({
        showModal: true,
        currentlySelectedTicket: getSelectedTicketFromId(ticket_id)
      });



    };

    var getSelectedTicketFromId = (ticket_id) =>{

        for(let i = 0; i < this.props.tickets.length ; i++){
            
            console.log('ticket is ' , this.props.tickets[i].id)
            if(this.props.tickets[i].id === ticket_id){      
                return this.props.tickets[i];
            }
        }

    }

   


    if (this.props.nextPageUrl !== null && this.props.nextPageUrl !== undefined) {
      nextButton = <button onClick={() => {this.props.getNextPage(this.props.nextPageUrl)}}> Next </button>;
    } 
    
    if(this.props.prevPageUrl !== null && this.props.prevPageUrl !== undefined ){
      prevButton = <button onClick={() => this.props.getPrevPage(this.props.prevPageUrl)}> Previous </button>;
    }

    if(this.props.error !== null  && this.props.error !== undefined){
        error = <Error message={this.props.error} />
    }


    

    return (
        <React.Fragment>
            <DetailModal show={this.state.showModal} onHide={modalClose}  backdrop={true} ticket={this.state.currentlySelectedTicket}  />
             <TicketsList tickets={this.props.tickets} onShowDetails={modalShow} />
             {error}
             {prevButton}
             {nextButton}
        </React.Fragment>
       
    );
  }
}

Home.PropType = {
    tickets: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    tickets: state.tickets.ticketItems,
    nextPageUrl: state.tickets.nextPageUrl,
    prevPageUrl: state.tickets.prevPageUrl,
    error: state.tickets.error
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