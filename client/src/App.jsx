import { Route, Routes } from "react-router-dom";
import './App.css'

import Landing from "./components/Landing/Landing.jsx"
import Home from "./components/Home/Home.jsx"

function App() {

  return (
    <div className="App" style={{height: "100vh", background: "slategray"}}>
        <Routes>
            <Route path="/" element={<Landing/>}/>

            <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
      
  )
}

export default App
