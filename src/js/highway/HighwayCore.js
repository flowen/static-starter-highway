import Highway from '@dogstudio/highway'
import HomeRenderer from './HomeRenderer'
import AboutRenderer from './AboutRenderer'
import ContactRenderer from './ContactRenderer'

import FadeTransition from './FadeTransition'

const HCore = new Highway.Core({
  renderers: {
    home: HomeRenderer,
    about: AboutRenderer,
    contact: ContactRenderer,
  },
  transitions: {
    default: FadeTransition,
  },
})

export default HCore
