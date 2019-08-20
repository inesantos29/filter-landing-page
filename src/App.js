import React from 'react';

import { NavMenu } from './components/NavMenu';
import { Header } from './components/Header';
import { Intro } from './components/Intro';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <>
          <NavMenu/>
          <Header/>
          <Intro/>

      </>
  );
}

export default App;
