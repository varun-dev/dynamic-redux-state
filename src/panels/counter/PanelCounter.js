import React from 'react'
import ButtonIncrement from './components/ButtonIncrement'
import ButtonDecrement from './components/ButtonDecrement'
import LabelCounter from './components/LabelCounter'
import { incrementCount } from "./actions";
import PropTypes from "prop-types";
import {xconnect} from "../../utils/redux-utils";

class PanelCounter extends React.Component {
  componentDidMount () {
    // TODO: investigate - Redux 4 not initialising reducer after replaceReducer API
    this.props.incrementCount()
  }

  render () {
    return <div>
      <LabelCounter/>
      <ButtonIncrement/>
      <ButtonDecrement/>
    </div>
  }
}

export default xconnect (null, {incrementCount})(PanelCounter)

PanelCounter.contextTypes = {
  store: PropTypes.object.isRequired
}
