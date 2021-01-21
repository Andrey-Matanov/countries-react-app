import React from 'react';
import { MemoryRouter } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import RootRouter from '../pages/RootRouter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
    return (
        <>
            <Provider store={store}>
                <MemoryRouter>
                    <RootRouter />
                </MemoryRouter>
            </Provider>
        </>
    );
};

export default App;
