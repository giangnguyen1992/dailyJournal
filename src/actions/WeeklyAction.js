import { LINE_THROUGH, LINE_THROUGH_2, SAVE_WEEK, SAVE_WEEKNOW } from '../constants/actionTypes';

export const lineThrough = () => ({
    type: LINE_THROUGH
});

export const lineThrough2 = () => ({
    type: LINE_THROUGH_2
});

export const saveWeek = (weekData) => ({
    type: SAVE_WEEK,
    payload: weekData
});

export const saveWeekNow = (weekNow) => ({
    type: SAVE_WEEKNOW,
    payload: weekNow
});