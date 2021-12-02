import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import './App.css';
import Home from 'components/Views/Home';

export default function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={} />
          <Route path="/movies/:id/*" element={} /> */}
      </Routes>
    </div>
  );
}
