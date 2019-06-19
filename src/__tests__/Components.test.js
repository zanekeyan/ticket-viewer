import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import Error from '../components/Error';
import Ticket from '../components/Ticket'
import TicketList from '../components/TicketsList'
import TicketInfoModal from '../components/TicketInfoModal'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockTicket , findByTestAtrr } from '../util/index'

const setUp = (Component , props={}) => {
    const component = shallow(<Component {...props} />);
    return component;
};

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

describe('Error Component Should render correctly', () => {
    let sampelErrorMessage = "sample error message"
    let component = shallow(<Error message={sampelErrorMessage}/>);

    it('Error div Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'error-div');
        expect(wrapper.length).toBe(1);
    });

    it('Error div should render error message', () => {
        expect(component.find('h1').text()).toEqual( "Error: " + sampelErrorMessage);
    });
});
  
describe('Ticket Component Should render correctly', () => {
    
    let testTicket = {
        subject: "example_subject",
        id: "0000",
        created_at: "sample date"
    }

    let component = shallow(<Ticket ticket={testTicket} />);

    it('Ticket Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'ticket-div');
        expect(wrapper.length).toBe(1);
    });

    it('Should contain and display subject of ticket object passed to it', () => {
        expect(component.contains(testTicket.subject));
    });

    it('Should contain and display id of ticket object passed to it', () => {
        expect(component.contains(testTicket.id));
    });

    it('Should contain and display creation date of ticket object passed to it', () => {
        expect(component.contains(testTicket.created_at));
    });
});

describe('Ticketslist Component Should render correctly', () => {

    it ('Renders tickets list' , () => {
        function showModal() {}
        const testTickets = [
               {id: "0000" , subject:"example_subject", created_at: "sample date" },
               { id: "0001" , subject:"example_subject2", created_at: "sample date" }
        ]

        const wrapper = shallow(
                        <TicketList tickets={testTickets} onShowModal={showModal} />,
        )

        testTickets.forEach(ticket => {
          expect(
            wrapper.contains(
                <Ticket 
                id={ticket.id}
                subject={ticket.subject}
                submitter_id={ticket.submitter_id}
                created_at={ticket.created_at}
                onShowDetails={showModal()}
                />,
            ),
            ).toBe(true)
        })
    });

    it('Should render without errors', () => {
        let component;
        component = setUp(TicketList); 

        const wrapper = findByTestAtrr(component, 'tickets-list');
        expect(wrapper.length).toBe(1);
    });
});

describe('TicketInfoModal Component Should render correctly', () => {
    let component;
    component = shallow(<TicketInfoModal ticket={mockTicket} />);

    it('Should render Modal element', () => {
        const wrapper = findByTestAtrr(component, 'modalPopup');
        expect(wrapper.length).toBe(1);
    });

    it('Should render modal-title with value of the provided ticket subject ', () => {
        const wrapper = findByTestAtrr(component, 'modal-title');
        expect(wrapper.length).toBe(1);
        expect(wrapper.contains(mockTicket.subject));
    });

    it('Should render a h3 element with the status value of a ticket object', () => {
        expect(component.find('h3').text()).toEqual("Status:  " + mockTicket.status);
    });

    it('Should contain and display submitter_id of a ticket object ', () => {
        expect(component.contains(mockTicket.submitter_id));
    });

    it('Should contain and display requester_id value of a ticket object ', () => {
        expect(component.contains(mockTicket.requester_id));
    });

    it('Should contain and display group_id value of a ticket object ', () => {
        expect(component.contains(mockTicket.group_id));
    });

    it('Should contain and display created_at value of a ticket object ', () => {
        expect(component.contains(mockTicket.created_at));
    });

    it('Should contain and display updated_at value of a ticket object ', () => {
        expect(component.contains(mockTicket.updated_at));
    });

    it('Should contain and display description value of a ticket object ', () => {
        expect(component.contains(mockTicket.description));
    });

});

describe('Header Component Should render correctly', () => {
    let component;
    component = setUp(Header); 

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'container');
        expect(wrapper.length).toBe(1);
    });
});

describe('Footer Component Should render correctly', () => {
    let component;
    component = setUp(Footer); 

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'footer');
        expect(wrapper.length).toBe(1);
    });
});



