import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';
import '../stylesheets/ticket.css'


const  TicketsList  = props =>{
    // get tickets if they exist
    if(props.tickets !== undefined && props.tickets !== null){
        var tickets = props.tickets.map(ticket => (
            <Ticket 
            id={ticket.id}
            subject={ticket.subject}
            submitter_id={ticket.submitter_id}
            created_at={ticket.created_at}
            onShowDetails={props.onShowDetails}
            />
        ));
    }
    
    return (
        <div className="tickets-list" >
            <ul className="list-group  my-list-group bg-dark list-group-flush ">
                {tickets}
            </ul>
        </div>
      
    );
  
}

export default TicketsList;