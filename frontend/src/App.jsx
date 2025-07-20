import React from "react"
import{Route,Routes} from 'react-router-dom'
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainsSignup from "./pages/CaptainsSignup"
import Start from "./pages/Start"
import Home from "./pages/Home"
import UserProtectWrapper from "./pages/UserProtectWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/'element ={<Start/>}></Route>
        <Route path='/login'element ={<UserLogin></UserLogin>}></Route>
        <Route path='/signup'element ={<UserSignup></UserSignup>}></Route>
        <Route path='/captain-login'element ={<CaptainLogin></CaptainLogin>}></Route>
        <Route path='/captain-signup'element ={<CaptainsSignup></CaptainsSignup>}></Route>
         <Route path='/home'element ={<UserProtectWrapper><Home/></UserProtectWrapper>}></Route>
         <Route path ='/user/logout'element={<UserProtectWrapper><UserLogout></UserLogout></UserProtectWrapper>}></Route>
         <Route path='/captain-home' element ={<CaptainHome></CaptainHome>}></Route>
      </Routes>
    </div>
  )
}

export default App
