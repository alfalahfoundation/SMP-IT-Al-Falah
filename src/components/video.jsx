// import React from "react"
// import { Link, graphql } from "gatsby"
// import Layout from "../components/Layout"
// import Iframe from 'react-iframe'

// const Video = ( {data} ) => (
//   <Layout>
//        {data.allCockpitVideo.edges.map(({ node, }) => {
//                     return (
//                         <ul>
//                             <li>{node.name.value}</li>
//                              <Iframe url={`https://muhzulzidan.my.id/`+`${node.video.value}`}
//                                 width="450px"
//                                 height="450px"
//                                 id="myId"
//                                 className="myClassname"
//                                 display="initial"
//                                 position="relative"/>
//                         </ul>
//                     )
//                 })}
//       {console.log(data.allCockpitVideo)}
//       <br/>
       
//   </Layout>
// )

// export default Video



import React from "react"
import View from "./View"
// import { getUser } from "../utils/auth"
// import Iframe from 'react-iframe'
// import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Player, BigPlayButton } from 'video-react';

const Video = () => {
  // const user = getUser();
  // const { displayName, email, emailVerified } = user;
  // const accessToken = user.stsTokenManager.accessToken; 

  const data = useStaticQuery(graphql`
    query video1 {
        allCockpitVideo(filter: {lang: {eq: "id"}}) {
        edges {
                node {
                  id
                    video {
                        value
                    }
                    name {
                        value
                    }
                }
            }
        }
    }
`)
  return (
    <View title="Your Course">
        <div>
          <p className="text-sm text-gray-600 flex items-center mb-4">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          
          {data.allCockpitVideo.edges.map(({ node, }) => {
                    return (
                        <ul key={node.id}>
                            <li >{node.name.value}</li>
                             {/* <Iframe url={`https://muhzulzidan.my.id/`+`${node.video.value}`}
                                width="450px"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"/> */}
                                  <Player src={`https://muhzulzidan.my.id/`+`${node.video.value}`}>
                                    <BigPlayButton position="center" />
                                  </Player>
                        </ul>
                    )
                })}
        </div>
    </View>
  )
}

export default Video
