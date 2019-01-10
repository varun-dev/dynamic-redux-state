import React from 'react'
import PropTypes from 'prop-types'

import { decrementCountAction } from '../actions'
import connect from '../../../utils/connect-wrapper'

function ButtonDecrement({ onClick }) {
  return (
    <button type="button" onClick={onClick}>Decrement</button>
  )
}

ButtonDecrement.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default connect(null, { onClick: decrementCountAction })(ButtonDecrement)
