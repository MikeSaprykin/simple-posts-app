import {
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST
} from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {

    const lookUp = {
        [FETCH_POSTS]: (state, action) => _.mapKeys(action.payload.data, 'id'),
        [FETCH_POST]: (state, action) => {
            return {...state, [action.payload.data.id]: action.payload.data }
        },
        [DELETE_POST]: (state, action) => _.omit(state, action.payload)
    };

    return lookUp[action.type] ?
        lookUp[action.type](state, action) :
        state
}