import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
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
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['form']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;