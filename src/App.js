import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/Page/Home/Home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
