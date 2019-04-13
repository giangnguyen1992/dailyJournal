import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistedStore } from '../store/store';
import App from './App';
import 'normalize.css';
import '../style/GlobalStyle.scss';

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    );
};

export default Root;