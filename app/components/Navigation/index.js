/**
*
* Navigation
*
*/

import React from 'react';
import images from './../../images/background/background.png';
import styles from './styles.css';
import goBack from './../../images/buttons/goBack.png';

function Navigation() {
  return (
    <div className="container-fluid">
    <div className={styles.background}>
 <div className="row">
   <div className="col-md-4">
     </div>
     <div className="col-md-4">
       <span>
         חזון התושבים 
         </span>
     </div>
     <div className="col-md-4">
       <img src={goBack}/>
     </div>
 </div>

    </div>
    </div>
  );
}

export default Navigation;
