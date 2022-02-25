import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalContextProvider } from './context'

import DefaultLayout from './containers/BoardDefaultLayout';

import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/_styles.scss";

const glogalShares = {
  test: 'test'
}

const App = () => (
  <Router>
    <GlobalContextProvider context={glogalShares}>
      <Routes>
        <Route exact path="/board/:id" element={<DefaultLayout />} />
      </Routes>
    </GlobalContextProvider>
  </Router>
);

export default App