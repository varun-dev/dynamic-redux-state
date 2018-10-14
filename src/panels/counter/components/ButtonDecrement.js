import React from 'react'
import PropTypes from 'prop-types'

import { decrementCount } from '../actions'
import xconnect from '../../../utils/redux-utils'

function ButtonDecrement({ onClick }) {
  return (
    <button onClick={onClick}>Decrement</button>
  )
}

ButtonDecrement.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default xconnect(null, { onClick: decrementCount })(ButtonDecrement)
