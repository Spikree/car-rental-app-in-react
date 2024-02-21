import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import './components/styles/main.css'
import Cars from "./components/Cars"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return <>
  <Router>
    <Header />
    <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/Cars" element={<Cars />} />
    </Routes>
    </Router>
  </>
}

export default App
