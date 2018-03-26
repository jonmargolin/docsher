/*
 *
 * MainDraft
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMainDraft from './selectors';
import {NavigationContiner} from './../NavigationContainer';
import { InfoContainer }from './../InfoContainer';
export class MainDraft extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <NavigationContiner />
      <InfoContainer/>
      </div>
    );
  }
}

const mapStateToProps = selectMainDraft();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDraft);
