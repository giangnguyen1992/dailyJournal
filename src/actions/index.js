import { createAction } from 'redux-actions';
import { TEST_ACTION } from '../constants/actionTypes';

export const testAction = createAction(TEST_ACTION);