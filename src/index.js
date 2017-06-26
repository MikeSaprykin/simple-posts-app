import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';

import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(ReduxPromise),
    // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew}/>
                <Route path="/posts/:id" component={PostsShow}/>
                <Route path="/" component={PostsIndex}/>
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
