import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import "./index.css"
import "./App.css"
import Homepage from './Pages/Homepage/Homepage'
import Landing from './Pages/Landing/Landing';
import FAQs from './Pages/FAQs/FAQs';
import Detail from './Pages/Homepage/Detail';
import Gallery from './Pages/Gallery/Gallery';
import Getinvolved from './Pages/Getinvolved/Getinvolved';



function App() {
  return (
  <div className="App">
  <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/questions" element={<FAQs/>}/>
      <Route path="/landing" element={<Landing />}/>
      <Route path="/blog" element={<Homepage />}/>
      <Route path="/detail" element={<Detail />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/getinvolved" element={<Getinvolved />} />
  </Routes>
 
 </div>
 );
} 
export default App;