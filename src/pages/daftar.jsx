
import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/Layout"

import Plus from "../assets/plus.inline.svg"
class Daftar extends React.Component {
  state = {
    enable: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.email !== this.state.email) ||
      (prevState.name !== this.state.name) ||
      (prevState.telepon !== this.state.telepon) ||
      prevState.program_yang_dipilih !== this.state.program_yang_dipilih
    ) {
      if (this.state.email ||
        this.state.name ||
        this.state.telepon ||
        this.state.program_yang_dipilih
      ) {
        this.setState({ enabled: true });
      } else {
        this.setState({ enabled: false });
      }
    }
  }

  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <div className="daftar">
          <div className="daftar-div-head">
            <div className="daftar-div-disini">
              <h2>Daftar di Sini </h2>
              <p>Kalau iya, scroll saja.</p>
            </div>
            <h2>atau <span> <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gemagrace79@gmail.com&su=Dari+Website&body=Hallo"> Email </a> </span> </h2>
          </div>
          <div className="daftar-div-form">
            <Plus className="plus"/>
            <form onSubmit={this.handleSubmit} className="daftar-form" >
              <label className="daftar-label" >
                <span>
                  <p > Nama : </p>
                </span>
                <input type="username" name="name" onChange={this.handleChange}  placeholder="Nama" />
              </label>
              <label className="daftar-label" >
                <span>
                  <p > Email : </p>
                </span>
                <input type="email" name="email" onChange={this.handleChange}
                  placeholder="Email" />
              </label>
              <label className="daftar-label" >
                <span>
                  <p > Telepon : </p>
                </span>
                <input type="tel" name="telepon" placeholder="Telepon" onChange={this.handleChange}
                />
              </label>
              <label className="daftar-label" >
                <span>
                  <p > Tempat Lahir : </p>
                </span>
                <input type="text" name="tempat_lahir"  placeholder="Tempat Lahir" onChange={this.handleChange}
                />
              </label>
              <label className="daftar-label">
                <span>
                  <p > Tanggal Lahir : </p>
                </span>
                <input type="date" name="tanggal_lahir" placeholder="Tanggal lahir"  onChange={this.handleChange}
                />
              </label>
              <div className="daftar-submit-div">
                {this.state.enabled ? <input type="submit" value="Kirim" className="daftar-submit" /> : <input type="submit" value="Kirim" className="daftar-submit daftar-submit-disable" disabled />}
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Daftar