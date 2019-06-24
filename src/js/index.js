import '../scss/index.scss'

import Highway from '@dogstudio/highway'
import CustomRenderer from './renderer'
import CustomTransition from './transition'

const H = new Highway.Core({
  renderers: {
    name: CustomRenderer,
  },
  transitions: {
    default: CustomTransition,
  },
})
