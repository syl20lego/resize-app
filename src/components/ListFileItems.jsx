import React from 'react'
import FileItem from './FileItem'

export default ({ files = [] }) => <ul className='ListFileItems'>{files.map((file) => <FileItem key={file.path} file={file} />)}</ul>
