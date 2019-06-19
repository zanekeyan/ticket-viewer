import React from 'react';
import Ticket from '../components/Ticket';

// creates the list of tickets that are parsed to it
const  TicketsList  = props =>{
    // get tickets if they exist
    if(props.tickets !== undefined && props.tickets !== null){
        var tickets = props.tickets.map(ticket => (
            <Ticket 
            key={ticket.id}
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