import { SAVE_HISTORY, UNMOUNT_SUCCESS, SAVE_TIMENOW } from '../constants/actionTypes';

const initialState = {
    historyArray: [],
    submitSuccess: false,
    timeNow: ''
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
                submitSuccess: !state.submitSuccess
            }

        case SAVE_TIMENOW:
            return {
                ...state,
                timeNow: action.payload
            }

        default:
            return state;    
    };
};