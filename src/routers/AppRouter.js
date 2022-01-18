import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import Register from '../Pages/Register/Register';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { loginSincrono } from '../actions/actionLogin';
import { productListFilterASincrono } from '../actions/actionProductList';
function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    const auth = getAuth();
    dispatch(productListFilterASincrono())
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         setIsLoggedIn(true)
         dispatch(loginSincrono(user.uid,user.displayName))
        }
        else{
         setIsLoggedIn(false)
        }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

