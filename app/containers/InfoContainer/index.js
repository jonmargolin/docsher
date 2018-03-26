/*
 *
 * InfoContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectInfoContainer from './selectors';
import Info  from './../../components/info';
import Navigation from './../../components/Navigation';

export class InfoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
  < Info/>
      </div>
    );
  }
}

const mapStateToProps = selectInfoContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
