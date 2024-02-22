import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import './components/styles/main.css'
import Cars from "./components/Cars"
import Location from "./components/Location"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart"

function App() {
  return <>
  <Router>
    <Header />
    <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/Cars" element={<Cars/>} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Cart" element={<Cart />} />
    </Routes>
    </Router>
  </>
}

export default App
