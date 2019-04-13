import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);
const persistedStore = persistStore(store);

export { persistedStore, store as default};