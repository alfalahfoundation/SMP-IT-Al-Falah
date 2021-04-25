import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/Layout"
// import View from "../components/View"
// import Status from "../components/Status"
// import Header from "../components/Header/index"
import Iframe from 'react-iframe'

import Modal from '../components/Header/modal';

import Dot from "../assets/dot.inline.svg"
import Circle from "../assets/circle.inline.svg"
import Roundbox from "../assets/roundboxsolid.inline.svg"
import Halfa from "../assets/halfa.inline.svg"
import Apostrope from "../assets/apostrope.inline.svg"
import Logo from "../../static/logo.inline.svg"
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.modalRef1 = React.createRef();
  }


  state = { className: "" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 500) {
      if (!this.state.className) {
        this.setState({ className: "header-fixed" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }

  }
                                  
  render() {

    const { location } = this.props

    let modal = "modal-desktop modal-index";

    return (
      <Layout location={location}>
        <nav className={`header ${this.state.className}`} ref={(r) => this.ref = r}  >
          <div className="header-logo">
            <span className="header-logo-span"><Link to="/" ><Logo /></Link></span>
          </div>
          <div className="header-div">
            <Link to="daftar" className="header-div-link">
              Daftar
            </Link>
            <Link to="jurnal" className="header-div-link">
              Jurnal
            </Link>
            <Link to="berita" className="header-div-link">
              Berita
            </Link>
            <Link to="/about" className="header-div-link">
              Tentang Kami
            </Link>
          </div>
          <div className={modal} >
            <button className="btn" onClick={() => this.modalRef1.current.openModal()}>
              <div className="burger" >
                <div className="burger-line-1"></div>
                <div className="burger-line-2"></div>
                <div className="burger-line-3"></div>
              </div>
            </button>
              <Modal ref={this.modalRef1}>
                    <Link to="daftar" className="header-div-link">
                    Daftar
                    </Link>
                    <Link to="jurnal" className="header-div-link">
                    Jurnal
                    </Link>
                    <Link to="berita" className="header-div-link">
                    Berita
                    </Link>
                    <Link to="/about" className="header-div-link">
                    Tentang Kami
                    </Link>
              </Modal>
          </div>
        </nav>

        <div className="homepage homepage1" >

          <Dot className="homepage-dot" />
          <Roundbox className="homepage-roundbox" />
          <Roundbox className="homepage-roundbox1" />
          <Circle className="homepage-circle" />
          <Halfa className="homepage-halfa" />

          <div className="homepage-div homepage-div1">
            <h2>Fokus & Tuntas</h2>
            <p>kami akan berusaha untuk membuat anak Anda menjadi anak sholeh dan juga pintar</p>
            <br />
            <Link to="/daftar"><button className="subscribe-submit"> Daftar</button></Link>
          </div>

        </div>
        <Fade left>
          <div className="homepage homepage2">
            <div className="homepage-div homepage-div2">
              <h2>Kenapa Kami ?</h2>
              <p>Transformasikan hidup Anda melalui pendidikan Mohamad Alaloush memulai karier baru dalam pengembangan perangkat lunak dengan mengikuti kursus di Udemy. Apa yang dapat Anda lakukan?</p>
            </div>
            <Iframe url="https://www.youtube.com/watch?v=rAcdX5jRRgQ"
              width="700px"
              height="300px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative" />
          </div>
        </Fade>
          <div className="homepage homepage3">
            <div className="homepage-div homepage-div3">
            <Fade bottom>
                <div className="homepage-box">
                  <Apostrope className="homepage-apostrope" />
                  <div className="another-box">
                    <div className="avatar"></div>
                    <p className="p">SDIT Aliya itu sekolah yang hampir sempurna, karena sekolah ini memiliki guru-guru yang sangat luar biasa. Guru-guru di SDIT Aliya itu sangat ramah dan pengertian keadaan murid-muridnya. Selain itu guru-guru di sana juga memiliki sifat kekeluargaan antar murid maupun sesama</p>
                    <h4 className="h4">Farrel Hadinata</h4>
                    <p className="p">Alumni angkatan IV</p>
                  </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="homepage-box">
                  <Apostrope className="homepage-apostrope" />
                  <div className="another-box">
                    <div className="avatar"></div>
                    <p className="p">SDIT Aliya itu sekolah yang hampir sempurna, karena sekolah ini memiliki guru-guru yang sangat luar biasa. Guru-guru di SDIT Aliya itu sangat ramah dan pengertian keadaan murid-muridnya. Selain itu guru-guru di sana juga memiliki sifat kekeluargaan antar murid maupun sesama</p>
                    <h4 className="h4">Farrel Hadinata</h4>
                    <p className="p">Alumni angkatan IV</p>
                  </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="homepage-box">
                  <Apostrope className="homepage-apostrope" />
                  <div className="another-box">
                    <div className="avatar"></div>
                    <p className="p">SDIT Aliya itu sekolah yang hampir sempurna, karena sekolah ini memiliki guru-guru yang sangat luar biasa. Guru-guru di SDIT Aliya itu sangat ramah dan pengertian keadaan murid-muridnya. Selain itu guru-guru di sana juga memiliki sifat kekeluargaan antar murid maupun sesama</p>
                    <h4 className="h4">Farrel Hadinata</h4>
                    <p className="p">Alumni angkatan IV</p>
                  </div>
                </div>
            </Fade>
            </div>
          </div>


      </Layout>
    )
  }
}

export default Index
