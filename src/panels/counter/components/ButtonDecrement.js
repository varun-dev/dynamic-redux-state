import {decrementCount} from '../actions'
import PropTypes from 'prop-types'
import {xconnect} from '../../../utils/redux-utils'

function ButtonDecrement(props) {
  return (
    <button onClick={props.decrementCount}>Decrement</button>
  )
}

ButtonDecrement.propTypes = {
  decrementCount: PropTypes.func.isRequired
}

export default xconnect(null, {decrementCount})(ButtonDecrement)
