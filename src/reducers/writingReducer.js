import { SAVE_HISTORY } from '../constants/actionTypes';

const initialState = {
    historyArray: []
}

export default function writingReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_HISTORY:
            return {
                ...state,
                historyArray: [...state.historyArray, action.payload]
            }

        default:
            return state;    
    };
};