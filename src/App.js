import logo from "./logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Intro from "./component/intro";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Nav />
          <Routes>
            {/* <Route path="./coordinater" element={<Coordinater/>} */}
            {/* <Route path="./wise" element={<Wise/>} */}
            {/* <Route path="./inquiry" element={<Inquiry/>} */}
          </Routes>
        </div>
        <div className="body">
          <Intro />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
