import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Home from './views/Home/HomeView';
import Coin from './views/Coin/CoinView';

const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/coin/:coinName" exact children={<Coin />} />
        <Route path="*" children={<Coin />} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

function App({ store }) {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
