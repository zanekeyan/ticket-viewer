import {REQUEST_TICKETS ,
RECIEVE_TICKETS,
RECIEVE_TICKETS_ERROR } from '../types';

const initialState = {
    fetching: false,
    ticketItems: null,
    error: null,
    nextPageUrl: null,
    prevPageUrl: null,
}

export default function ticketsReducer(state=initialState , action){

    // process provided action , else return unaltered state
    switch(action.type){
        case REQUEST_TICKETS:
            return {
                ...state,
                fetching: true,
                error: null
            }
        case RECIEVE_TICKETS:
            return{
                ...state,
                fetching: false,
                ticketItems: action.payload.data.tickets,
                nextPageUrl: action.payload.data.next_page,
                prevPageUrl: action.payload.data.previous_page,
                error: action.payload.data.message
            }
        case RECIEVE_TICKETS_ERROR:
            return{
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
        return state
    }

}