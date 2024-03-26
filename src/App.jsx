import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/menu" exact Component={Menu}></Route>
          </Routes>
          {/* <Menu></Menu> */}
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
}

export default App;
