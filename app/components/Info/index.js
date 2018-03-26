/**
*
* Info
*
*/

import React from 'react';
import vn from './../../images/icons/vn.png';

import styles from './styles.css';

function Info() {
  return (
    <div className="container-fluid">
    <div className={styles.info}>
<div className="col-md-3">
  <img src={vn}/>
  <span>#4</span>
  <span className={styles.title}>מס גירסה</span>
  </div>
  <div className="col-md-3">
  </div>
  <div className="col-md-3">
  </div>
  <div className="col-md-3">
  </div>
    </div>
    </div>
  );
}

export default Info;
