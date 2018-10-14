import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import xconnect from '../../../utils/redux-utils'

function LabelCounter({ label }) {
  return (
    <h1>{label}</h1>
  )
}

LabelCounter.propTypes = {
  label: PropTypes.number.isRequired,
}

function mapStateToProps(state, { panelId }) {
  return {
    label: get(state, `panels.${panelId}.count`),
  }
}

export default xconnect(mapStateToProps)(LabelCounter)
