import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './App.css'

import Landing from "./components/Landing/Landing.jsx"
import Home from "./components/Home/Home.jsx"
import HomeDetail from "./components/HomeDetail/HomeDetail.jsx"
import HomeForm from "./components/HomeForm/HomeForm.jsx"

import Navbar from "./components/Navbar/Navbar.jsx"
import GlobalStyles from "./styles/Global.js";

function App() {
  const darkTheme = {
    colors: {
      text: "#ffffff",
      lighterBgCol: "#474747",
      bgCol: "#353535",
      darkerBgCol:"#252525",
    }
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
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
    </ThemeProvider>
  )
}

export default App
