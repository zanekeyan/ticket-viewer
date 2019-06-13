import React from 'react';
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
                <button
                    type="button"
                    className="btn btn-outline-light shadow-lg"
                    onClick={() => props.onShowDetails(props.id)} 
                > Ticket Details </button>    
            </div>
    </li>
    </div>
    );     
}

export default Ticket;