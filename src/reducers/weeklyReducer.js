import { LINE_THROUGH, LINE_THROUGH_2, SAVE_WEEK } from '../constants/actionTypes';

const initialState = {
    firstDone: false,
    secondDone: false,
    thisWeek: {}
};

export default function weeklyReducer (state = initialState, action) {
    switch (action.type) {
        case LINE_THROUGH:
            return {
                ...state,
                firstDone: !state.firstDone
            }

        case LINE_THROUGH_2:
            return {
                ...state,
                secondDone: !state.secondDone
            }

        case SAVE_WEEK:
            return {
                ...state,
                thisWeek: action.payload
            }

        default: 
            return state;    
    };
};