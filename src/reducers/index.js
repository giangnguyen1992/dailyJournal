import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import weeklyReducer from './weeklyReducer';
import writingReducer from './writingReducer';

const rootReducer = combineReducers({
    writingReducer,
    weeklyReducer,
    form: formReducer
});

const persistConfig = {
    key: 'journal',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;