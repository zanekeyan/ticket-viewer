import {REQUEST_TICKETS ,
RECIEVE_TICKETS,
RECIEVE_TICKETS_ERROR } from '../types';
import axios from'axios';
    
    // handle tickets fetching
    export const fetchTickets = () => {
        return dispatch => {
            // dispatch action to store
            dispatch(requestTickets())
    
            //fetch tickets from backend
            axios.get('http://localhost:3001/tickets')
                // recieve tickets and dispatch action
                .then(
                    
                    res => { console.log(res.data)
                        dispatch(recieveTickets(res.data))
                    
                }
            
            
            )
                // catch error if available and dispatch error to store
                .catch(error => dispatch(recieveTicketsError(error.message)))
        }
     };
    
    const requestTickets = ()  => ({
           type: REQUEST_TICKETS,
     });
    
    const recieveTickets = tickets => ({
         type: RECIEVE_TICKETS, 
         payload: tickets
     })
    
    const recieveTicketsError = error => ({
         type: RECIEVE_TICKETS_ERROR,
         payload: error
     })