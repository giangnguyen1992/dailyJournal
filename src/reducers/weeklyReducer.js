import { LINE_THROUGH, LINE_THROUGH_2, SAVE_WEEK, SAVE_WEEKNOW } from '../constants/actionTypes';

const initialState = {
    firstDone: false,
    secondDone: false,
    thisWeek: {},
    weekNow : 0
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

        case SAVE_WEEKNOW:
            return {
                ...state,
                weekNow: action.payload
            }    

        default: 
            return state;    
    };
};