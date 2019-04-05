import { LINE_THROUGH, LINE_THROUGH_2 } from '../constants/actionTypes';

const initialState = {
    weeklyDone: false,
    weeklyDone_2: false
};

export default function weeklyReducer (state = initialState, action) {
    switch (action.type) {
        case LINE_THROUGH:
            return {
                ...state,
                weeklyDone: !state.weeklyDone
            }

        case LINE_THROUGH_2:
            return {
                ...state,
                weeklyDone_2: !state.weeklyDone_2
            }

        default: 
            return state;    
    };
};