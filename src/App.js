import React from 'react';
import { ImageBackground } from 'react-native'
import { Provider } from 'react-redux';
import Store from './reduxs/store-config'
import Router from './config/Router'

export default function App() {
    return (
        <Provider store={Store}>
            <Router />
        </Provider>
    );
}

