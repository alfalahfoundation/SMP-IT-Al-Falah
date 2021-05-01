import React from 'react'
import { graphql } from 'gatsby'

import Img from "gatsby-image"

import Iframe from 'react-iframe'

import Layout from "../components/Layout"
// import Header from "../components/Header"

class About extends React.Component {


  render() {

    const { location, data } = this.props

    return (
      <Layout location={location}>
        {/* <Header/> */}
        <div className="homepage about-page" >
          <div className="homepage-div ">
            <h2 >Fokus & Tuntas</h2>
            <p  >We're on a mission to help web designers around the globe make a great living from their creativity and passion. Learn in-demand skills from world-class instructors — no matter where you live.</p>
            <br />
            <br />
            <br />
            <Iframe url="https://www.youtube.com/watch?v=rAcdX5jRRgQ"
              width="450px"
              height="450px"
              id="myId"
              className="iframe"
              display="initial"
              position="relative" />
            <br />
            <br />
            <div className="visi" >
              <h2>Visi</h2>
              <p>Menjadi Lembaga terdepan dalam membimbing, membina dan mencerdaskan masyarakat Indonesia guna menjadi insan yang beriman, berilmu, beramal, bertaqwa dan berakhlak mulia. </p>
            </div>
            <div className="misi">
              <h2>Misi</h2>
              <ul>
                <li>Mengembangkan Sistem Pendidikan yang berkarakter Islami sesuai perkembangan zaman.</li>
                <li>Membina & Membimbing masyarakat untuk menjadi insan yang beriman, berilmu, beramal, bertaqwa dan berakhlak mulia.</li>
                <li>Menegakkan nilai-nilai kemanusiaan sesuai ajaran Islam.</li>
                <li>Meningkatkan kualitas SDM guna mewujudkan masyarakat yang sejahtera, selamat dan bahagia di dunia dan akhirat. </li>
              </ul>
            </div>
            <div className="karyawan-div">
              <div className="karyawan">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Gatsby Docs are awesome"
                />
                <span className="name">
                  <h3>Aco</h3>
                  <p>jabatan</p>
                </span>
              </div>
              <div className="karyawan">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Gatsby Docs are awesome"
                />
                <span className="name">
                  <h3>Aco</h3>
                  <p>jabatan</p>
                </span>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}


export default About

export const aboutQuery = graphql`
  query aboutQuery {
    file(name: {eq: "karyawan"}) {
      childImageSharp {
        fluid (maxWidth: 700){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`