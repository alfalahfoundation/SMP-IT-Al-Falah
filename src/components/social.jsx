
// change data before using

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles

const Social = ({ siteTitle,  }) => {

// change data before using

// styles

let social = "social-div";

let socialIcon = "social-div-icon";

let Partner = "social-partner-div";

  return (
    <div>
      <div className={social}>
        <h3>Temukan Kami</h3>
            <div className={socialIcon}>
              <a rel="noopener noreferrer"target="_blank"href={"https://www.facebook.com/halijah.six"} ><FontAwesomeIcon icon={['fab',"facebook-square"]} aria-label="fb"/></a>

              <a rel="noopener noreferrer"target="_blank"href={`https://www.instagram.com/data`}> <FontAwesomeIcon icon={['fab',"instagram"]} aria-label="ig"/></a>
            
              <a rel="noopener noreferrer"target="_blank" href=
              {`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gemagrace79@gmail.com&su=Dari+Website&body=Hallo`} aria-label="mail">
              <FontAwesomeIcon icon={['far',"envelope"]} />
              </a>

              <a rel="noopener noreferrer"target="_blank"href={`https://twitter.com/data`} aria-label="twiiter" ><FontAwesomeIcon icon={['fab',"twitter-square"]}/></a>
          </div>
      </div>
      <div className={Partner}>
          {/* <h3>Partner Kami</h3> */}
          <strong></strong>
      </div>
    </div>
  )
};

export default Social;

// change data before using