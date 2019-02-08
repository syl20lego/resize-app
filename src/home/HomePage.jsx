import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import { ActionCreators } from '../actions/ActionCreators';

class HomePage extends Component {
  // componentDidMount() {
  //   this.props.changeProfile();
  // }

  render() {
    return (
            <Home/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // timeline: state.tweets.timeline,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeProfile: (profile) => {
    //   dispatch(ActionCreators.changeProfile(profile));
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)