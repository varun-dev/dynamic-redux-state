import PropTypes from 'prop-types'
import { get } from 'lodash'
import { xconnect } from '../../../utils/redux-utils'

function LabelCounter(props) {
  return (
    <h1>{props.label}</h1>
  )
}

LabelCounter.propTypes = {
  label: PropTypes.number,
}

function mapStateToProps(state, { panelId }) {
  return {
    label: get(state, `panels.${panelId}.count`),
  }
}

export default xconnect(mapStateToProps)(LabelCounter)
