import { SAVE_HISTORY, UNMOUNT_SUCCESS } from '../constants/actionTypes';

export const saveHistory = (history) => ({
    type: SAVE_HISTORY,
    payload: history
});

export const unmountSuccess = () => ({
    type: UNMOUNT_SUCCESS
});