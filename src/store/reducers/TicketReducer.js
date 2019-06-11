import {REQUEST_TICKETS ,
RECIEVE_TICKETS,
RECIEVE_TICKETS_ERROR } from '../types';
import axios from'axios';
import { defer } from 'q';

const initialState = {
    fetching: false,
    ticketItems: null,
    error: null,
}

export default function ticketsReducer(state=initialState , action){

    switch(action.type){
        case REQUEST_TICKETS:
            return {
                ...state,
                fetching: true
            }
        case RECIEVE_TICKETS:
            return{
                ...state,
                fetching: false,
                ticketItems: action.payload
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