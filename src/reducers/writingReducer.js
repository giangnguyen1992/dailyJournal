import { SAVE_HISTORY, UNMOUNT_SUCCESS } from '../constants/actionTypes';

const initialState = {
    historyArray: [],
    submitSuccess: false
}

export default function writingReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_HISTORY:
            return {
                ...state,
                historyArray: [...state.historyArray, action.payload]
            }
        
        case UNMOUNT_SUCCESS:
            return {
                ...state,
                submitSuccess: true
            }

        default:
            return state;    
    };
};