import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"
import Footer from "../footer"

// Global styles and component-specific styles.
import "./global.css"



// let path = ["/", "/about"]



const Layout = ({ children, location }) => {

  let pathnames = [
    '/',
  ]

  let daftar = [
    "daftar",
    "/daftar",
    "/daftar/"
  ]

  let sub;

  if (daftar.includes(location.pathname)){
    sub = true
  }else{
    sub = false
  }

  let mains;

  if (pathnames.includes(location.pathname)) {
    mains = (
    <main className="main main-index" >{children}</main>
    )
  } else if (daftar.includes(location.pathname)) {
    mains = (
      <main className="main main-daftar" >{children}</main>
    )
  } else {
    mains = (
      <main className="main " >{children}</main>
    )
  }

  return(
  <div>
    <Helmet title="Sekolah SMP IT Al Falah" />

    {location.pathname !== "/"  &&
        <Header />
    }
    
    {mains}
    <Footer sub={sub}/>
  </div>
)}

export default Layout
