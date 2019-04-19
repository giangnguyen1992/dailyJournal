import { LINE_THROUGH, LINE_THROUGH_2, SAVE_WEEK, SAVE_WEEKNOW } from '../constants/actionTypes';

const initialState = {
    firstDone: false,
    secondDone: false,
    thisWeek: {},
    weekNow : 0
};

export default function weeklyReducer (state = initialState, action) {
    switch (action.type) {
        // erste Weekly Challenge durch streichen
        case LINE_THROUGH:
            return {
                ...state,
                firstDone: !state.firstDone
            }
        
        // zweite Weekly Challenge druch streichen    
        case LINE_THROUGH_2:
            return {
                ...state,
                secondDone: !state.secondDone
            }

        // speichert die zufallsgenierten Weekly Challenge die Woche    
        case SAVE_WEEK:
            return {
                ...state,
                thisWeek: action.payload
            }

        // speichert die momentane Woche    
        case SAVE_WEEKNOW:
            return {
                ...state,
                weekNow: action.payload
            }    

        default: 
            return state;    
    };
};