import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from './pages/SignUp';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='about' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
