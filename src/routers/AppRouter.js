import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import Register from '../Pages/Register/Register';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getAuth,onAuthStateChanged } from "firebase/auth";
function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }
    })

 
  }, [setIsLoggedIn])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={
        <PublicRoute isAuthenticated={isLoggedIn}>
            <Login/> 
        </PublicRoute>}/>
        <Route path="/register" element={
        <PublicRoute isAuthenticated={isLoggedIn}>
            <Register/>
        </PublicRoute>
        }/>
        <Route path="/products" element={<Products/>}/>

        <Route path="/*" element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
              <DashboardRoutes/>
          </PrivateRoute>
          }/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

