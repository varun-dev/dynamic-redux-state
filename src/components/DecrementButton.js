import {decrementCount} from '../actions'
import PropTypes from 'prop-types'
import {xconnect} from '../utils/redux-utils'

function DecrementButton(props) {
  return (
    <button onClick={props.decrementCount}>Decrement</button>
  )
}

DecrementButton.PropTypes = {
  decrementCount: PropTypes.func.isRequired
}

export default xconnect(null, {decrementCount})(DecrementButton)
