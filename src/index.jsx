import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Summary from './components/Summary';
import Lesson from './components/Lesson';

const App = () => (
  <Router>
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/souhrn-lekci" exact>
            <Summary />
          </Route>
          <Route path="/lekce" exact>
            <Lesson />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
