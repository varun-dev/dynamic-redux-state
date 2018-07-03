import PropTypes from 'prop-types'
import {incrementCount} from '../actions'
import {xconnect} from '../utils/redux-utils'

function IncrementButton(props) {
  return (
    <button onClick={props.incrementCount}>Increment</button>
  )
}

IncrementButton.PropTypes = {
  incrementCount: PropTypes.func.isRequired
}

export default xconnect(null, {incrementCount})(IncrementButton)
