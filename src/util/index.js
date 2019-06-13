import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducers/Reducers';
import { middlewares } from '../store/index.js';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[className='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export const emptyTicket= { 
    id: '',
    subject: '',
    description: ' ',
    created_at: ' ',
    updated_at: ' ',
    status: ' ',
    requester_id: ' ',
    submitter_id: ' ',
    assignee_id: ' ',
    organization_id: ' ',
    group_id: ' ',
}