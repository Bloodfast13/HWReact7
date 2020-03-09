import React from 'react';
import { Router, Route, Link, Redirect, RouteProps, Switch, MemoryRouter } from 'react-router-dom'
import history from './history'
import Users from './components/Users'
import Login from './components/Login'
import './App.scss';

const myRoute = (
  component: RouteProps['component'],
  path: string,
  isLogin: boolean
): JSX.Element => {
  const Loggedin = localStorage.getItem('Loggedin') === "true";
  if (Loggedin || !isLogin) {
    return <Route path={path} component={component} />
  } else {
    return <Redirect from={path} to='/login' />
  }
}

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Redirect exact from='/' to='/login' />
          {myRoute(Login, '/login', false)}
          {myRoute(Users, '/users', true)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
