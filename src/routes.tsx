import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const App = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
