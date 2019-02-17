import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'

class HomePage extends Component {
	componentDidMount() {
	  // this.props.changeProfile();
	}

	render() {
		return <Home files={this.props.files}/>
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		files: state.file.files
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
