import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"
import Footer from "../footer"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"

// let path = ["/", "/about"]
const Layout = ({ children, location }) => (
  <div>
    <Helmet title="Gatsby Simple Firebase Authentication" />
    {/* {console.log(location.pathname)} */}
    {location.pathname !== "/"  &&
        <Header />
      }
    
    <main className={styles.main} >{children}</main>
    <Footer/>
  </div>
)

export default Layout
