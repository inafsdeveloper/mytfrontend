import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import SubsList from './subscriptions/pages/SubsList';
import VideosList from './videos/pages/VideosList';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/u1/subscriptions" exact>
            <SubsList />
          </Route>
          <Route path="/u1/s1/videos" exact>
            <VideosList />
          </Route>
          <Redirect to="/u1/subscriptions" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
