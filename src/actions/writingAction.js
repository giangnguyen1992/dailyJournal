import { SAVE_HISTORY, UNMOUNT_SUCCESS, SAVE_TIMENOW, MOUNT_SUCCESS } from '../constants/actionTypes';

export const saveHistory = (history) => ({
    type: SAVE_HISTORY,
    payload: history
});

export const unmountSuccess = () => ({
    type: UNMOUNT_SUCCESS
});

export const mountSuccess = () => ({
    type: MOUNT_SUCCESS
});

export const saveTimeNow = (now) => ({
    type: SAVE_TIMENOW,
    payload: now
});