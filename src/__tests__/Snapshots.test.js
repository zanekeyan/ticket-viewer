import React from 'react';
import renderer from 'react-test-renderer'
import App from '../App';
import Error from '../components/Error';
import Ticket from '../components/Ticket'
import TicketList from '../components/TicketsList'
import TicketInfoModal from '../components/TicketInfoModal'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {mockTicket} from '../util/index'

const setUp = (Component  ) => {
    const component = renderer.create(<Component />);
    return component;
};

test('App snapshot test' , () => {
    const component = setUp(App)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Ticket snapshot test' , () => {
    const component = setUp(Ticket)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('TicketList snapshot test' , () => {
    const component = setUp(TicketList)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Error snapshot test' , () => {
    const component = setUp(Error)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('TicketInfoModal snapshot test' , () => {
    const component = renderer.create(<TicketInfoModal  ticket={mockTicket} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Header snapshot test' , () => {
    const component = setUp(Header)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Footer snapshot test' , () => {
    const component = setUp(Footer)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})


