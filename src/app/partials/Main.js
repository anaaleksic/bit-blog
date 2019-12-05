import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AuthorsPage from '../pages/AuthorsPage';

import SingleAuthorPage from '../pages/SingleAuthorPage';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />


            <Route path="/authors" component={AuthorsPage} />


            <Route path="/about" component={AboutPage} />


            <Route path="/single-author-page/:authorId" component={SingleAuthorPage} />

        </Switch >
    )
}

export default Main