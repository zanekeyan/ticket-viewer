import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../Utils.js';
import ReactDOM from 'react-dom';
import App from '../App';
import Error from '../components/Error';
import Ticket from '../components/Ticket'
import TicketList from '../components/TicketsList'
import TicketInfoModal from '../components/TicketInfoModal'
import {emptyTicket} from '../Utils.js/index'

const setUp = (Component , props={}) => {
    const component = shallow(<Component {...props} />);
    return component;
};

describe('Error Component Should render correctly', () => {
    let component;
    beforeEach(() => {
        component = setUp(Error); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'error-div');
        expect(wrapper.length).toBe(1);
    });
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  

describe('Ticket Component Should render correctly', () => {
    let component;
    component = setUp(Ticket); 

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'ticket-div');
        expect(wrapper.length).toBe(1);
    });
});

describe('Ticketslist Component Should render correctly', () => {
    let component;
    component = setUp(TicketList); 

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'tickets-list');
        expect(wrapper.length).toBe(1);
    });
});

describe('TicketInfoModal Component Should render correctly', () => {
    let component;
    component = shallow(<TicketInfoModal ticket={emptyTicket} />);
    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'modalPopup');
        expect(wrapper.length).toBe(1);
    });
});

