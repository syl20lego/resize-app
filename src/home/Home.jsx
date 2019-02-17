import React from 'react'
import PropertiesPannel from '../components/PropertiesPannel'
import ImageViewer from '../components/ImageViewer'
import './Home.css'

const Home = ({ files = [] }) => (
	<div className='Home'>
		<PropertiesPannel files={files}/>
		<ImageViewer file={files[0]}/>
	</div>
)

export default Home
