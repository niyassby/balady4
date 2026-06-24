import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Login from "./Components/Login/Login"
import Admin from "./Components/Admin/Admin"
import MainPage from "./Pages/MainPage"
import Loading from "./Components/Loading/Loading"
import UserPage from "./Pages/UserPage"
import Users from "./Components/Users/Users"
import View from "./Components/View/View"
import Reset from "./Components/Login/Reset"
import NotPage from "./Pages/NotPage"
import NewUserPage from "./Pages/NewUserPage"
// import NewView from "./Components/View/new view/NewView"
// import HtmlView from "./Components/View/new view/HtmlView"

function App() {

  

  return (
    <>
    <HashRouter hashType={"noslash"} >
      <Loading/>
      <Routes>
        <Route  path='/'  element={<MainPage/>} />
        <Route  path='/Eservices/HealthIssue/PrintedLicenses'  element={<NewUserPage/>} >
          <Route  index  element={<View/>} />
        </Route>
        <Route  path='/admin'  element={<HomePage/>} >
          <Route  index  element={<Admin/>} />
          <Route  path="add"  element={<Users/>} />
          <Route  path="edit"  element={<Users/>} />
          
        </Route>
        <Route  path='/login'  element={<Login/>} />
        <Route  path='/reset'  element={<Reset/>} />
        <Route  path='*'  element={<NotPage/>} />
        <Route  path='/new'  element={<NewUserPage/>} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App

