import React from 'react'
// import ReactDOM from 'react-dom'
import SnapMidtrans from 'react-midtrans/src'
 
import axios from 'axios';


{/* <script id= "midtrans-script" src="https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js" data-environment="sandbox" data-client-key="SB-Mid-client-85XTniWo9FbDf0dV" type="text/javascript"></script> */}

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
    }
    componentDidMount () {
      const script = document.createElement("script");
  
      script.src = "https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js";
      script.dataEnvironment = "sandbox";
      script.dataClientKey = "SB-Mid-client-85XTniWo9FbDf0dV";
  
      document.body.appendChild(script);
  }
  // console.log(`${process.env.MIDTRANS_URL}`)

    handleSubmit = event =>{
      event.preventDefault();

      let url = `${process.env.MIDTRANS_URL}/v2/token`;
      axios.get(url, 
        {
          headers: {
           "Access-Control-Allow-Origin": "*",
           "Content-Type": 'application/json',
             "Accept":"application/json",
             "Authorization":" Basic U0ItTWlkLXNlcnZlci15N25KbUktTkx5MlZyeUhtQW5fcGZ1QkU6",
          },
        },
        {
        card_number: "4811111111111114",
        card_cvv: "123",
        card_exp_month: "12",
        card_exp_year: "2019"
       },
  ).then(res =>{
    console.log(res)
  }) .catch(error => {
      console.log(error)
  })
    

}

    render() {

      // let a = `${process.env.MIDTRANS_URL}`
      return (
        <div>
{/* <h1>{a} {process.env.MIDTRANS_URL}</h1>
<h1>{`${process.env.COCKPIT_API_URL}`}</h1> */}


            {/* <SnapMidtrans clentKey={'your-ker'} token={'payment-token'}>
                <button onClick={this.handleSubmit} > My Button For PayMe </button>
            </SnapMidtrans> */}
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.handleSubmit}
          />
        </div>
      );
    }
  }
  export default CustomTextInput