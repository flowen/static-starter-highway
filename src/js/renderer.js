import { Renderer } from '@dogstudio/highway'

class CustomRenderer extends Renderer {
  // Hooks/methods
  onEnter() {
    console.log('onEnter')
  }
  onLeave() {
    console.log('onLeave')
  }
  onEnterCompleted() {
    console.log('onEnterCompleted')
  }
  onLeaveCompleted() {
    console.log('onLeaveCompleted')
  }
}

// Don`t forget to export your renderer
export default CustomRenderer
