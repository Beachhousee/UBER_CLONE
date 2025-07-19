import React from "react"
import{Route,Routes} from 'react-router-dom'
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainsSignup from "./pages/CaptainsSignup"
import Home from "./pages/Home"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element ={<Home/>}></Route>
        <Route path='/login'element ={<UserLogin></UserLogin>}></Route>
        <Route path='/signup'element ={<UserSignup></UserSignup>}></Route>
        <Route path='/captain-login'element ={<CaptainLogin></CaptainLogin>}></Route>
        <Route path='/captain-signup'element ={<CaptainsSignup></CaptainsSignup>}></Route>
      </Routes>
    </div>
  )
}

export default App
