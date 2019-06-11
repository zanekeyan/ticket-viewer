import { combineReducers } from 'redux';
import ticketReducer from './TicketReducer';

// this file is intended to make it easier to include additional functionalities , simply add as many reducers here to incorporate
export default combineReducers({
    tickets: ticketReducer
})