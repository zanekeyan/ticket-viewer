import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketsList from '../components/TicketsList'
import {fetchTickets} from '../store/actions/TicketActions';
import Error from '../components/Error';
import DetailModal from '../components/TicketInfoModal';
import {mockTicket} from '../util'

class Home extends Component {

    //init state
    constructor(props) {
        super(props);
        this.state = {
            currentTicketsData: null,
            showModal: false,
            currentlySelectedTicket:mockTicket
        };
      }

    componentWillMount(){ 
        this.setState({currentTicketsData: this.props.tickets})
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

    // triggered to close Modal of ticket details
    let modalClose = () => this.setState({ showModal: false });

    // triggered when button for ticket details is clicked
    let modalShow = ticket_id => {
    
     // update the currently selected ticket and show the Modal with information
      this.setState({
        showModal: true,
        currentlySelectedTicket: getSelectedTicketFromId(ticket_id)
      });
    };

    // return the selected ticket to show the details
    var getSelectedTicketFromId = (ticket_id) =>{
        for(let i = 0; i < this.props.tickets.length ; i++){
            if(this.props.tickets[i].id === ticket_id){      
                return this.props.tickets[i];
            }
        }
    }

    // if a next page url is provided from zendesks api, create a button to process should the user need it
    if (this.props.nextPageUrl !== null && this.props.nextPageUrl !== undefined) {
      nextButton = <button className="next-button" onClick={() => {this.props.getNextPage(this.props.nextPageUrl)}}> Next </button>;
    } 

    // if a previous page url is provided from zendesks api , create a button to process should the user need it
    if(this.props.prevPageUrl !== null && this.props.prevPageUrl !== undefined ){
      prevButton = <button className="prev-button" onClick={() => this.props.getPrevPage(this.props.prevPageUrl)}> Previous </button>;
    }

    //if any errors exist , process accordingly
    if(this.props.error !== null  && this.props.error !== undefined){
        error = <Error message={this.props.error} />
    }

    return (      
        <div className="main-container-div" >
            <div className="tickets-container-div">
                <DetailModal show={this.state.showModal} onHide={modalClose}  backdrop={true} ticket={this.state.currentlySelectedTicket}  />
                <TicketsList tickets={this.props.tickets} onShowDetails={modalShow} />
                {error}
            </div>
          <div className="pagination-buttons-div">
            {prevButton}
            {nextButton}
          </div>
        </div>     
    );
  }
}
// map redux store state to this class props
const mapStateToProps = state => ({
    tickets: state.tickets.ticketItems,
    nextPageUrl: state.tickets.nextPageUrl,
    prevPageUrl: state.tickets.prevPageUrl,
    error: state.tickets.error
});

// map functions from redux actions to props in this class
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