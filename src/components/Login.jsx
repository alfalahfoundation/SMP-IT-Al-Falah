import React from "react"
import { navigate } from "gatsby"
import View from "./View"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"
// import history from './history';

const Login = () => {
  // {console.log(history.back())}
  if (isLoggedIn()) {
    // navigate(`/app/profile`)
    // navigate(`${history.back()}`)
    navigate(-1)
    // console.log(`goback`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          // navigate('/app/profile');
          navigate(-1)
          // console.log(`goback`)
        }
      }
    };
  }

  return (
    <View title="Log In" >
      <p style={{
            display: "flex",
            justifyContent: "center"
      }}>Please sign-in to access to the private route:</p>
      {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
    </View>
  );

}

export default Login
