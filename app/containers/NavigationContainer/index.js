/*
 *
 * NavigationContiner
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContiner from './selectors';
import Navigation from './../../components/Navigation';
import Info  from './../../components/info';

export class NavigationContiner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
 
        <Navigation {...this.props}/>
        
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContiner();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContiner);
