import React from 'react'
import './Components.css'

export default ({ file = {} }) => (
	<li key={file.path} className="FileItem">
		<img src={file.path} alt={file.status} width="32" height="32" />
	</li>
)
