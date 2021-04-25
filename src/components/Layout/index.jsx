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

  let mains;

  if (pathnames.includes(location.pathname)) {
    mains = (
    <main className="main" style={{padding:"0em"}}>{children}</main>
    )
  } else {
    mains = (
      <main className="main" >{children}</main>
    )
  }
  console.log(location.pathname)
  console.log(pathnames)
  return(
  <div>
    <Helmet title="Sekolah SMP IT Al Falah" />

    {location.pathname !== "/"  &&
        <Header />
    }
    
    {mains}
    <Footer/>
  </div>
)}

export default Layout
