import PropTypes from 'prop-types'
import {incrementCount} from '../actions'
import {xconnect} from '../../../utils/redux-utils'

function ButtonIncrement(props) {
  return (
    <button onClick={props.incrementCount}>Increment</button>
  )
}

ButtonIncrement.propTypes = {
  incrementCount: PropTypes.func.isRequired
}

export default xconnect(null, {incrementCount})(ButtonIncrement)
