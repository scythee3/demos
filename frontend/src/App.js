import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Elections from './pages/Elections';
import Legislation from './pages/Legislation';
import Identity from './pages/Identity';
import Help from './pages/Help';



function App() {

  const [data, setData] = useState('');

  useEffect(() => {
          fetch('http://localhost:5000/api')
              .then((response) => response.json())
              .then((data) => setData(data.message));
      }, []);

      return (
          <Router>
	      <div style={{ display: 'flex' }}>	 
	      	<Sidebar />
              	<div style={{ flex: 1, padding: '1rem' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/elections" element={<Elections />} />
                        <Route path="/legislation" element={<Legislation />} />
                        <Route path="/identity" element={<Identity />} />
	      		<Route path="/help" element={<Help />} />
                    </Routes>
                </div>
              </div>
	   </Router>
      );
}

export default App;
