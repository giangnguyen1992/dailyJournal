import { handleActions } from 'redux-actions';
import { TEST_ACTION } from '../constants/actionTypes';

export default handleActions(
    {
        [TEST_ACTION]: (state, actions) => console.log('Daaaaaaaaanm Boiiii')
    },
    {}
);