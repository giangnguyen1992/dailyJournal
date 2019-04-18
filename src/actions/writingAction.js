import { SAVE_HISTORY, UNMOUNT_SUCCESS, SAVE_TIMENOW, MOUNT_SUCCESS } from '../constants/actionTypes';

// Speichere das From Objekt
export const saveHistory = (history) => ({
    type: SAVE_HISTORY,
    payload: history
});

// Wenn die Form erfolgreich übersendet wurde
export const unmountSuccess = () => ({
    type: UNMOUNT_SUCCESS
});

// Wenn ein neuer Tag beginnt und die Form wieder aktiv wird
export const mountSuccess = () => ({
    type: MOUNT_SUCCESS
});

// Speichere den heutigen Tag in der Woche
export const saveTimeNow = (now) => ({
    type: SAVE_TIMENOW,
    payload: now
});