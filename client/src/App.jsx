import { Route, Routes } from "react-router-dom";
import './App.css'

import Landing from "./components/Landing/Landing.jsx"
import Home from "./components/Home/Home.jsx"
import HomeDetail from "./components/HomeDetail/HomeDetail.jsx"
import HomeForm from "./components/HomeForm/HomeForm.jsx"

import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
  const showPostComponent = true

  return (
    <div className="App" style={{height: "100vh", background: "slategray"}}>
      <Navbar></Navbar>

        <Routes>
            <Route path="/" element={<Landing/>}/>

            <Route path="/home/" element={<Home/>}>
              <Route path="/home/country/:id" element={<HomeDetail/>}/>
              <Route path="/home/add_Activity" element={<HomeForm/>}/>
            </Route>
        </Routes>
    </div>
      
  )
}

export default App
