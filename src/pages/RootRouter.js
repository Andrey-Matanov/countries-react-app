import React from 'react';
import { Route } from 'react-router';
import Main from './Main';

const RootRouter = () => {
    return (
        <>
            <Route exact path='/' render={() => <Main />} />
        </>
    );
};

export default RootRouter;
