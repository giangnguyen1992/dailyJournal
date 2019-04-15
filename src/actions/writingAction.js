import { SAVE_HISTORY, UNMOUNT_SUCCESS, SAVE_TIMENOW } from '../constants/actionTypes';

export const saveHistory = (history) => ({
    type: SAVE_HISTORY,
    payload: history
});

export const unmountSuccess = () => ({
    type: UNMOUNT_SUCCESS
});

export const saveTimeNow = (now) => ({
    type: SAVE_TIMENOW,
    payload: now
});