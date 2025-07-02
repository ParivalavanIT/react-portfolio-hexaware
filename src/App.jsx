import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmptyPage from './pages/EmptyPage';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empty" element={<EmptyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
