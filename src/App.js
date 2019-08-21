import React from 'react';

import { NavMenu } from './components/NavMenu';
import { Header } from './components/Header';
import { UserList } from './components/UserList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <>
          <NavMenu/>
          <Header/>
          <UserList/>
      </>
  );
}

export default App;
