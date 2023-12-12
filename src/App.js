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



function App() {
  return (
  <div className="App">
  <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/questions" element={<FAQs/>}/>
      <Route path="/home" element={<Homepage />}/>
  </Routes>
 
 </div>
 );
} 
export default App;