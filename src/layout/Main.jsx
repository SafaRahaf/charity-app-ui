import React from 'react'

import { Outlet } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'

import AuthProvider from "../AuthProvider";

const Main = () => {
  return (
    <AuthProvider>
      <div>
        <Header/>
        <div className="container mx-auto">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default Main