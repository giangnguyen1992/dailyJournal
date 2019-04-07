import { LINE_THROUGH, LINE_THROUGH_2 } from '../constants/actionTypes';

const initialState = {
    firstDone: false,
    secondDone: false 
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

        default: 
            return state;    
    };
};