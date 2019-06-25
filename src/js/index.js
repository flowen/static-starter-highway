import '../scss/index.scss'

import Highway from '@dogstudio/highway'
import HomeRenderer from './HomeRenderer'
import AboutRenderer from './AboutRenderer'
import ContactRenderer from './ContactRenderer'

import CustomTransition from './Fade'

const H = new Highway.Core({
  renderers: {
    home: HomeRenderer,
    about: AboutRenderer,
    contact: ContactRenderer,
  },
  transitions: {
    default: CustomTransition,
  },
})
