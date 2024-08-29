import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import './App.css';
import Header from './layout/Header';
import Slider from './component/Slider';
import Enquiries from './component/Enquries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
        <Header 
          style={{ 
            zIndex: 999, 
            backgroundImage: "radial-gradient( circle farthest-corner at -2% 1.4%, #fff 0%, #ff007f 100.7% )" 
          }} 
        />
            <Slider />
           <div style={{ position: "relative" }}>
           <Enquiries style={{ position: "absolute" }} className="headerform" />
         </div>
         </>
        } />
        <Route 
          path="/login" 
          element={
            <div className='relative' >
              <Slider />
          <Login className="absolute "/>
            </div>
        } 
        />
        <Route 
          path="/signup" 
          element={
             <div className='relative' >
                <Header 
          style={{ 
            zIndex: 999, 
            backgroundImage: "radial-gradient( circle farthest-corner at -2% 1.4%, #fff 0%, #ff007f 100.7% )" 
          }} />
              <Slider />
          <Signup className="absolute  "/>
         
           <div style={{ position: "relative" }}>
           {/* <Enquiries style={{ position: "absolute" }} className="headerform" /> */}
         </div>
          </div>} 
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
