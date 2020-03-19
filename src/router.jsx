import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from './Layout';
import Home from './Routes/Home';
import GamePage from './Routes/GamePage';
import UserList from './Routes/UserGameList';
import Login from './Routes/Unprotected/Login';
import CreateUser from './Routes/Unprotected/CreateUser';
import Protected from './Components/Protected';
import LoggedIn from './Components/LoggedIn';

const MainRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/login'>
          <LoggedIn>
            <Login />
          </LoggedIn>
        </Route>
        <Route path='/new-user'>
          <LoggedIn>
            <CreateUser />
          </LoggedIn>
        </Route>
        <Route path='/game/:gameName'>
          <Protected>
            <GamePage />
          </Protected>
        </Route>
        <Route path='/my-games'>
          <Protected>
            <UserList />
          </Protected>
        </Route>
        <Route path='/'>
          <Protected>
            <Home />
          </Protected>
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default MainRouter;
