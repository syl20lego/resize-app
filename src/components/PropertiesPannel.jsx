import React from 'react'
import ListFileItems from './ListFileItems'
import './Components.css'; 

export default ({ files = [] }) => (
	<div className="PropertiesPannel">
		<ListFileItems files={files} />
	</div>
)
