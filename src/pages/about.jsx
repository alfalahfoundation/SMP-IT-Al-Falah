import React from 'react'
// import { graphql, Link } from 'gatsby'
import Iframe from 'react-iframe'

import Layout from "../components/Layout"
// import Header from "../components/Header"
class About  extends React.Component {

  
    render(){
  
      const { location } =  this.props  
  
  
      return (
       <Layout location={location}>
         {/* <Header/> */}
                <div className="homepage about-page" >
                    <div className="homepage-div ">
                      <h2 style={{color:"black"}}>Creating the best web design education online</h2>
                      <p style={{color:"black"}}>We're on a mission to help web designers around the globe make a great living from their creativity and passion. Learn in-demand skills from world-class instructors — no matter where you live.</p>
                      <br/>
                      <br/>
                      <br/>
                      <Iframe url="https://www.youtube.com/embed/Na-OyAU0gGQ"
                                width="450px"
                                height="450px"
                                id="myId"
                                className="iframe"
                                display="initial"
                                position="relative"/>
                    </div>

                  </div>
            </Layout>
        )
    }}


export default About

