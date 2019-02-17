import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import ImageViewer from '../src/components/ImageViewer'
import PropertiesPannel from '../src/components/PropertiesPannel'
import FileItem from '../src/components/FileItem'
import ListFileItems from '../src/components/ListFileItems'
import Home from '../src/home/Home'
import image from './resources/image.jpg';

const file = {path:`${image}`, status:'new'}

storiesOf('Image Viewer', module).add('Default', () => <ImageViewer file={file}/>)
storiesOf('File Item', module).add('Default', () => <FileItem file={file}/>)
storiesOf('List File Items', module).add('Default', () => <ListFileItems files={[file, file]} />)
storiesOf('Properties Pannel', module).add('Default', () => <PropertiesPannel files={[file, file]}/>)
storiesOf('Home', module).add('Default', () => <Home files={[file, file]}/>)
