import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './App.css'

import Landing from "./components/Landing/Landing.jsx"
import Home from "./components/Home/Home.jsx"
import HomeDetail from "./components/HomeDetail/HomeDetail.jsx"
import HomeForm from "./components/HomeForm/HomeForm.jsx"
import GlobalStyles from "./styles/Global.js";
import Toasts from "./components/Toast/Toasts.jsx"
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx"
import FeedbackForm from "./components/FeedbackForm/FeedbackForm.jsx"
import { storeActivities, storeCountries} from "./redux/actions.js"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { useSelector } from "react-redux";


function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(storeCountries())
        dispatch(storeActivities())
    }, [])


  const darkTheme = {
    colors: {
      accent: "#5d9eff",
      accentPale: "#b6d3ff",
      text: "#e0eeff",
      lighterBgCol: "#474747",
      bgCol: "#353535",
      darkerBgCol:"#252525",
      cardBg: "#000000",
    }
  }

  const lightTheme = {
    colors: {
      accent: "#5d9eff",
      accentPale: "#b6d3ff",
      text: "#02112c",
      lighterBgCol: "#ffffff",
      bgCol: "#ffffff",
      darkerBgCol:"#e6e6e6",
      cardBg: "#ffffff",
    }
  }


  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App" style={{height: "100vh"}}>
      
      <Toasts></Toasts>

        <Routes>
            <Route path="/" element={<Landing/>}/>

            <Route path="/home/" element={<Home/>}>
              <Route path="/home/country/:id" element={<HomeDetail/>}/>
              <Route path="/home/add_Activity" element={<HomeForm/>}/>
              <Route path="/home/feedback" element={<FeedbackForm/>}/>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
     </div>  
    </ThemeProvider>
  )
}

export default App
