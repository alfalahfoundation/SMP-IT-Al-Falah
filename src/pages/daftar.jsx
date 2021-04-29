
import React from 'react'

import Layout from "../components/Layout"


class Daftar extends React.Component {
  state={ 
    enable: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if ( 
      ( prevState.email !== this.state.email )||
      ( prevState.name !== this.state.name )||
      ( prevState.telepon !== this.state.telepon) ||
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
  const { location } =  this.props  
  
  let form = "daftar-form"
  let div = "daftar-div"
  let div1 = "daftar-div1"
  let label1 = "daftar-label1"
  let label2 = "daftar-label2"
  let label3 = "daftar-label3"
  // let checkbox = "daftar-checkbox"
  let email = "daftar-email"
  let nama = "daftar-nama"
  let p1 = "daftar-p1"
  let submitDisable = "daftar-submit-disable"
  let submit = "daftar-submit"
  let submitDiv = "daftar-submit-div"

//   let programDiv = "daftar-program-div"

//   let metodeDiv = "daftar-metode-div"
//   let daftarMetodeDetail = "daftar-metode-detail"
//   let daftarMetodeDetailP = "daftar-metode-detail-p"


//   let daftarFile = "daftar-file"

  return (
    <Layout location={location}>
    <div className={div}> 
      <div className={div1}>
      <h1>Formulir Pendaftaran </h1>
    <form onSubmit={this.handleSubmit} className={ form}>
      <label className={label1}>
          <span>
              <p className={p1}> Nama : </p>
          </span>
      <input type="username" name="name" onChange={this.handleChange} 
      // required 
      className={nama}
      />
      </label>
  
      <label className={label2}>
          <span>
              <p className={p1}> Email : </p>
          </span>
      <input type="email" name="email" onChange={this.handleChange} 
      // required 
      className={email}
      placeholder="name@location.com"/>
      </label>
  
      <label className={label3}>
          <span>
              <p className={p1}> Telepon : </p>
          </span>
      <input type="tel" name="telepon" onChange={this.handleChange}  className={nama}
      />
      </label>
    
      
      <label className={label2}>
          <span>
              <p className={p1}> Tempat Lahir : </p>
          </span>
      <input type="text" name="tempat_lahir" onChange={this.handleChange}  className={nama}
      />
      </label>

      <label className={label2}>
          <span>
              <p className={p1}> Tanggal Lahir : </p>
          </span>
      <input type="date" name="tanggal_lahir" onChange={this.handleChange}  className={nama}
      />
      </label>
    <div className={submitDiv}>
          {this.state.enabled?<input type="submit" value="Kirim" className={submit}  />:<input type="submit" value="Kirim" className={submitDisable} disabled/>}
    </div>
    </form>
    </div>
</div>
</Layout>
  )}}

export default Daftar