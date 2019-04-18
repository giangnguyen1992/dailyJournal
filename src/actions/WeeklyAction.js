import { LINE_THROUGH, LINE_THROUGH_2, SAVE_WEEK, SAVE_WEEKNOW } from '../constants/actionTypes';

// Streiche Weekly Challenge No. 1 aus
export const lineThrough = () => ({
    type: LINE_THROUGH
});

// Streiche Weekly Challenge No. 2 aus
export const lineThrough2 = () => ({
    type: LINE_THROUGH_2
});

// Speichere die dieswöchige Weekly Challenge Daten
export const saveWeek = (weekData) => ({
    type: SAVE_WEEK,
    payload: weekData
});

// Speichere die momentane Wochenzahl
export const saveWeekNow = (weekNow) => ({
    type: SAVE_WEEKNOW,
    payload: weekNow
});