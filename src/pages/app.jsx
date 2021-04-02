import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Video from "../components/video"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
// import Status from "../components/Status"

const App = ({location}) => (
  <Layout location={location}>
    {/* <Status /> */}
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/video" component={Video} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
