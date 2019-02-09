import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import ImageViewer from '../src/components/ImageViewer/ImageViewer'
import PropertiesPannel from '../src/components/PropertiesPannel/PropertiesPannel'
import Home from '../src/home/Home'

storiesOf('Image Viwere', module).add('Default', () => <ImageViewer />)

storiesOf('Properties Pannel', module).add('Default', () => <PropertiesPannel />)

storiesOf('Home', module).add('Default', () => <Home />)
