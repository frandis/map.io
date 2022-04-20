import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewProject from './pages/NewProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='projects/new' element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
