import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"
import Footer from "../footer"

// Global styles and component-specific styles.
import "./global.css"
import {main} from "./main.module.css"

// let path = ["/", "/about"]
const Layout = ({ children, location }) => (
  <div>
    <Helmet title="Sekolah SMP IT Al Falah" />
    {/* {console.log(location.pathname)} */}
    {location.pathname !== "/"  &&
        <Header />
      }
    
    <main className={main} >{children}</main>
    <Footer/>
  </div>
)

export default Layout
