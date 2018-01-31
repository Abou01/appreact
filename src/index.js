import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import movie from "./components/movie";
import trailer from "./components/trailer";
import top from "./components/top";
import preco from "./components/preco";
import last from "./components/last";

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={movie}>
        <IndexRoute component={movie}></IndexRoute>
    </Route>
    <Route path="/top" component={top}/>
    <Route path="/preCo" component={preco}/>
    <Route path="/Last" component={last}/>
    <Route path="/trailer" component={trailer}></Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
