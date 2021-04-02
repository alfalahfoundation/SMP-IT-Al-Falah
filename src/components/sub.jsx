import React, { Component } from 'react';



export default class Sub extends Component{


  // style



constructor(){

super();

this.state={ 
     display1:true,
    enable: false,
     email:'',
    }
}


handleChange = event =>{
this.setState({ [event.target.name]:event.target.value });
}

componentDidUpdate(prevProps, prevState) {
    if (
      prevState.email !== this.state.email 
    ) {
      if (this.state.email) {
        this.setState({ enabled: true });
      } else {
        this.setState({ enabled: false });
      }
    }
}



handleSubmit = event =>{

event.preventDefault();


console.log("User Email :"  + this.state.email)
const url = `${process.env.COCKPIT_API_URL}/api/forms/submit/subscriber?token=${process.env.COCKPIT_TOKEN}`

fetch(url, { 
    method: 'post',
    body: JSON.stringify(
        {
            "form": {
                "email": this.state.email,
            
        }
        }), 
    headers:{ 'Content-Type': 'application/json'} })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => {console.log('Success:', res)})
    this.setState({
                display1:false
            })
}


render(){
// styles 

let subscribeDiv = "subscribe-div";
let subscribeDiv1 = "subscribe-div1";
let subscribeDiv2 = "subscribe-div2";
let subscribeForm = "subscribe-form";
let subscribeEmail = "subscribe-email";
let subscribeSubmit = "subscribe-submit";
let subscribesubmitdisable = "subscribe-submit-disable";
let subscribeHead1 = "subscribe-head1";
let subscribeDesc = "subscribe-desc";


let none = "none"

return(
<div className={subscribeDiv}> 
{this.state.display1?
    <div className={subscribeDiv1}>
<form onSubmit={this.handleSubmit} className={subscribeForm} >

<div className={subscribeDesc}>
  <h2>E-Learning Courses</h2>
  <p>subscribe untuk mendapatkan informasi terbaru dari gemaclc, atau mungkin saja konten-konten menarik mengenai jasa kami</p>
</div>
<div className={subscribeDiv2}>
  <label >
    <span className={none}>
      Email :
    </span>
     
    <input type="email" name="email" onChange={this.handleChange} required className={subscribeEmail}
    placeholder="name@location.com"/>
  </label>

  {this.state.enabled?<input type="submit" value="Subscribe" className={subscribeSubmit}/>
  :<input type="submit" value="Subscribe" className={subscribesubmitdisable} disabled/>}
</div>


</form>
</div>: 
<h1 className={subscribeHead1}>Thank You</h1>

}
</div>
)
}
}
