import React from 'react';
import PropTypes from 'prop-types';
import ticketicon from '../ticket.png'


const Ticket = props => {
    return (
        <div className="ticket-div" >
       <li className="list-group-item bg-dark text-white">
            <div className="ticketImage">
            <img
                src = {ticketicon}
                className="img-thumbnail"
                alt="car icon" />
            </div>
            <div className="ticketInfo">
            <p> subject: {props.subject} </p>
            <p> ticket_id: {props.id} </p> 
            <p> created_at: {props.created_at}</p>
            <p> submitter_id: {props.submitter_id} </p>
            <button
                type="button"
                className="btn btn-outline-light shadow-lg"
                onClick={() => { }} 
            > Ticket Details </button>
             
            </div>

        </li>
        </div>
      );     
}

Ticket.propTypes = {
    id: PropTypes.string,
    subject: PropTypes.string
};

export default Ticket;