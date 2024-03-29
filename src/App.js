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
import FeedPost from './Pages/Hiddenfeed/Hiddedfeed';
import About from './Pages/About/About';
import Mission from './Pages/Mission/Mission';
import Vision from './Pages/Vision/Vision';
import Others from './Pages/Others/Others';



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
      <Route path="/postawci123" element={<FeedPost/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/mission" element={<Mission/>} />
      <Route path="/vision" element={<Vision/>} />
      <Route path="/others" element={<Others/>} />
  </Routes>
 
 </div>
 );
} 
export default App;