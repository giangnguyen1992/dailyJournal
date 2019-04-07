import { SAVE_HISTORY } from '../constants/actionTypes';

export const saveHistory = (history) => ({
    type: SAVE_HISTORY,
    payload: history
});