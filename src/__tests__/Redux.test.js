
import { REQUEST_TICKETS , RECIEVE_TICKETS , RECIEVE_TICKETS_ERROR } from '../store/types.js'
import TicketReducer from '../store/reducers/TicketReducer';

describe('Tickets reducer', () => {

    var expectedState = {"error": null, "fetching": false, "nextPageUrl": null, "prevPageUrl": null, "ticketItems": null}
    it('Should not modify state', () => {
        const newState = TicketReducer(undefined, {});
        expect(newState).toEqual(expectedState);
    });

    it('Fetching should change to true when a request is made', () => {
        var item = {}
        const newState = TicketReducer(undefined, {
            type: REQUEST_TICKETS,
            payload: item
        });
        expect(newState.fetching).toEqual(true);
    });

    it('State tickets should contain same amount of tickets recieved', () => {
        // init test object
        var item = {
            data: {
                tickets: {
                    0: { },
                    1: { },
                    2: { }
                }
            }
        }
        const newState = TicketReducer({}, {
            type: RECIEVE_TICKETS,
            payload: item
        }); 
        expect(Object.keys(newState.ticketItems).length).toEqual(3);
    });

    it('Should update nextPageUrl if recieved', () => {
        // init test object
        var item = {
            data: {
                next_page: "next page dummy"
            }
        }
        const newState = TicketReducer({}, {
            type: RECIEVE_TICKETS,
            payload: item
        }); 
        expect(newState.nextPageUrl).toEqual(item.data.next_page);
    });

    it('Should update previosPage if recieved', () => {
        // init test object
        var item = {
            data: {
                previous_page: "previous  page dummy"
            }
        }
        const newState = TicketReducer({}, {
            type: RECIEVE_TICKETS,
            payload: item
        }); 
        expect(newState.prevPageUrl).toEqual(item.data.previous_page);
    });

    it('Should recieve error', () => {
        // init test object
        var error = " somehting when wrong";
        const newState = TicketReducer({}, {
            type: RECIEVE_TICKETS_ERROR,
            payload: error
        }); 
        expect(newState.error).toEqual(error);
    });

});
