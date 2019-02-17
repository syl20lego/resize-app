import React from 'react'
import './Components.css'

export default ({ file = {} }) => <img className="ImageViewer" src={file.path} alt={file.status} />
