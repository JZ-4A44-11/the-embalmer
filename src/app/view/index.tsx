import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';

export default function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
