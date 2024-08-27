import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layout/Header';
import Slider from './component/Slider';
import Enquiries from './component/Enquries';


function App() {
  return (
    <div className="App">
    <Header style={{ zIndex: 999, backgroundImage: "radial-gradient( circle farthest-corner at -2% 1.4%, #fff 0%, #ff007f 100.7% )" }}/>
    <Slider />
    <div style={{ position: "relative" }}>
      <Enquiries style={{ position: "absolute" }} className="headerform" />
    </div>
  </div>
  );
}

export default App;
