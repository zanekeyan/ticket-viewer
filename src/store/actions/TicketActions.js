import {REQUEST_TICKETS ,
RECIEVE_TICKETS,
RECIEVE_TICKETS_ERROR } from '../types';
import axios from'axios';
    
// handle tickets fetching
export const fetchTickets = ( url = null ) => {
    return dispatch => {
        // dispatch action to store
        dispatch(requestTickets())
    
        //fetch tickets from backend , pass params if any are provided
        axios.get('http://localhost:3001/tickets' , { params: { requestedPageUrl: url }})
            // recieve tickets and dispatch action
            .then( res => dispatch(recieveTickets(res)))
            // catch error if available and dispatch error to store
            .catch(error => dispatch(recieveTicketsError(error.message)))
    }
};
    
const requestTickets = ()  => ({
    type: REQUEST_TICKETS,
});
    
const recieveTickets = ticketsResponse => ({
    type: RECIEVE_TICKETS, 
    payload: ticketsResponse
})
    
const recieveTicketsError = error => ({
    type: RECIEVE_TICKETS_ERROR,
    payload: error
})