import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';
import '../stylesheets/ticket.css'


class Home extends Component {


  render() {

    if(this.props.tickets !== null){


        var tickets = this.props.tickets.map(ticket => (
            <Ticket 
            id={ticket.id}
            subject={ticket.subject}
            submitter_id={ticket.submitter_id}
            created_at={ticket.created_at}
            />
        ));
    }
    
    return (
        <section className="tickets-list" >
        <div className="tickets-list-div" >
            <ul className="list-group  my-list-group bg-dark list-group-flush ">
                {tickets}
            </ul>
        </div >
        </section>
      
    );
  }
}

Home.PropType = {
    tickets: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    tickets: state.tickets.ticketItems
});


export default connect(mapStateToProps  ) (Home);