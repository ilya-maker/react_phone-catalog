import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/phones">
          <Catalog />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

const Header = () => <h2>Header</h2>;
const Home = () => <h2>Home</h2>;
const Catalog = () => <h2>Catalog</h2>;
const Footer = () => <h2>Footer</h2>;
