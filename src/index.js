import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FilteredList from './FilteredList';
import HelpPage from './HelpPage';
import AboutPage from './AboutPage';
import Search from './Search';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

const routes = {
    "/": Search,
    "/help": HelpPage,
    "/menu": Search,
    "/about": AboutPage,
}
const routeHTML = Object.keys(routes).map((url) => {
    return <Route exact path={url} key={url} component={routes[url]} />
})
//const tempRoute = <Route exact path="/" render={(routeProps) => (<FilteredList {...routeProps}
//  items={this.props.items.filter(this.filterAndSearch)} temp={() => this.temp()}/>)}/>
//const tempRoute = <Route exact path="/" render={props => <FilteredList {...FilteredList.props} />} />
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
