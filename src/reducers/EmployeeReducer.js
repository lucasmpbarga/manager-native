import {
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_FETCH,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        case EMPLOYEE_FETCH:
        default:
            return state;
    }
}