import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/Layout"
// import View from "../components/View"
import Status from "../components/Status"
// import Header from "../components/Header/index"
import Iframe from 'react-iframe'
// import Modals from "../components/Header/mainmodals"

import Dot from "../assets/dot.inline.svg"
import Circle from "../assets/circle.inline.svg"
import Roundbox from "../assets/roundboxsolid.inline.svg"
import Halfa from "../assets/halfa.inline.svg"

class Index extends React.Component {
  state ={className:"" };
  
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  
  handleScroll=()=>{
    if (window.pageYOffset > 500) {
        if(!this.state.className){
          this.setState({ className: "header-fixed" });   
        }
    }else{
        if(this.state.className){
          this.setState({ className: "" });
        }
    }
   
  }

  render(){

    const { location } =  this.props  

    let modal = "modal-desktop";

    return (
     <Layout location={location}>
        <nav className={`header ` + `${this.state.className}`} ref={(r)=>this.ref=r}  >
                    <div className="header-logo">
                      <span className="header-logo-span"><Link to="/" >E-Learning</Link></span>
                    </div>
                    <div className="header-div">
                      <Link to="/app/video" className="header-div-link">
                          Courses     
                      </Link>
                      <Link to="/about" className="header-div-link">
                          About     
                      </Link>
                      {/* <Status/> */}
                    </div>
                    {/* <div className={modal} >
                      <Modals />
                    </div> */}
        </nav>
       
      <div className="homepage homepage1" >
      <Dot className="homepage-dot"/>
      <Roundbox className="homepage-roundbox"/>
      <Roundbox className="homepage-roundbox1"/>
      <Circle className="homepage-circle"/>
      <Halfa className="homepage-halfa"/>
      {/* <h2 className="homepage-A">A</h2> */}
        <div className="homepage-div homepage-div1">
          <h2>Fokus & Tuntas</h2>
          <p>kami akan berusaha untuk membuat anak Anda menjadi anak sholeh dan juga pintar</p>
          <br/>
          <button className="subscribe-submit"> <Link to="/daftar">Daftar</Link></button>
        </div>
      
        
      </div>  
    <Fade left>  
      <div className="homepage homepage2">  
      
      
      <div className="homepage-div homepage-div2">
     
            <h2>Kenapa Kami ?</h2>
            <p>Transformasikan hidup Anda melalui pendidikan Mohamad Alaloush memulai karier baru dalam pengembangan perangkat lunak dengan mengikuti kursus di Udemy. Apa yang dapat Anda lakukan?</p>
           
        </div>
        <Iframe url="https://www.youtube.com/embed/Na-OyAU0gGQ"
                                  width="700px"
                                  height="300px"
                                  id="myId"
                                  className="myClassname"
                                  display="initial"
                                  position="relative"/>      
      </div>                            
    </Fade>
    <Fade right>  
      <div className="homepage homepage2">  
      
      
      <div className="homepage-div homepage-div2">
     
            <h2>Kenapa Kami ?</h2>
            <p>Transformasikan hidup Anda melalui pendidikan Mohamad Alaloush memulai karier baru dalam pengembangan perangkat lunak dengan mengikuti kursus di Udemy. Apa yang dapat Anda lakukan?</p>
           
        </div>
        <Iframe url="https://www.youtube.com/embed/Na-OyAU0gGQ"
                                  width="700px"
                                  height="300px"
                                  id="myId"
                                  className="myClassname"
                                  display="initial"
                                  position="relative"/>      
      </div>                            
    </Fade>

  </Layout>
)}}

export default Index
