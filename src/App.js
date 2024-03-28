import {  Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import Registry from "./routes/Registry";

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
      <Route path="/"      element={<Home/>}   >
   
       </Route>
      <Route>
        <Route path="/registry" element={<Registry/>} >    

        </Route>
      </Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
