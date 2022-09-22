import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Dashboard from './Routes/Dashboard';
import Loginx from './Routes/Loginx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Loginx />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="*" element={
            <>
              <h1>Nothing here to see</h1>
              <Link to="/">back Home</Link>
            </>
          } />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
