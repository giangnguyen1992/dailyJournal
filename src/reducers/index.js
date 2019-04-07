import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weeklyReducer from './weeklyReducer';
import writingReducer from './writingReducer';

const rootReducer = combineReducers({
    writingReducer,
    weeklyReducer,
    form: formReducer
});

export default rootReducer;