import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import SubscriptionsList from './subscription/pages/SubscriptionsList';
import VideosList from './videos/pages/VideosList';
import './App.css';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/subscriptions" exact>
            <SubscriptionsList />
          </Route>
          <Route path="/s1/videos" exact>
            <VideosList />
          </Route>
          <Redirect to="/subscriptions" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
