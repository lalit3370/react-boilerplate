import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Landing from './Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
