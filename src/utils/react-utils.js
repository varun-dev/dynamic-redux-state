import { cloneElement, Children, PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PanelProvider extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.panelId = props.panelId
  }

  getChildContext() {
    return { panelId: this.panelId }
  }

  render() {
    return this.props.panelId
      ? cloneElement(
        Children.only(this.props.children),
        { panelId: this.panelId },
      )
      : null
  }
}

PanelProvider.propTypes = {
  panelId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

PanelProvider.childContextTypes = {
  panelId: PropTypes.string.isRequired,
}
