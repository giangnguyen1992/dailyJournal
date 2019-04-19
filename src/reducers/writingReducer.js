import { SAVE_HISTORY, UNMOUNT_SUCCESS, SAVE_TIMENOW, MOUNT_SUCCESS } from '../constants/actionTypes';

const initialState = {
    historyArray: [],
    submitSuccess: false,
    timeNow: ''
}

export default function writingReducer(state = initialState, action) {
    switch (action.type) {
        // speichert den gesendeten Daily Entry ab als Objekt in einem Array
        case SAVE_HISTORY:
            return {
                ...state,
                historyArray: [...state.historyArray, action.payload]
            }
        
        // sobald die Form erfolgreich übermittelt wurde, wird sie unmount    
        case UNMOUNT_SUCCESS:
            return {
                ...state,
                submitSuccess: true
            }
        
        // Form wird wieder sichtbar für den User sobald ein neuer Tag beginnt    
        case MOUNT_SUCCESS:
            return {
                ...state,
                submitSuccess: false 
            }    

        // speichert den momentanen Tag in der Woche    
        case SAVE_TIMENOW:
            return {
                ...state,
                timeNow: action.payload
            }

        default:
            return state;    
    };
};