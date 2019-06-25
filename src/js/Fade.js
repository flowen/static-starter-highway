import Highway from '@dogstudio/highway'

class CustomTransition extends Highway.Transition {
  in({ from, to, trigger, done }) {
    console.log('in')
    console.log(from)
    console.log(to)
    done()
  }

  out({ from, trigger, done }) {
    console.log('out')
    console.log(from)
    done()
  }
}

export default CustomTransition
