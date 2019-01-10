import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GoldenLayout from 'golden-layout'

import PanelCounter from '../panels/counter/PanelCounter'
import layoutConfig from '../layout.config'
import PanelWrapper from './panel-wrapper'

const panelConfigs = layoutConfig.content[0].content

export default class LayoutWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.menuEl = React.createRef()
    this.layoutEl = React.createRef()
  }

  render() {
    return (
      <div>
        <ul id="menuContainer" ref={this.menuEl} />
        <div id="layoutContainer" ref={this.layoutEl} />
      </div>
    )
  }

  componentDidMount() {
    const layout = new GoldenLayout(layoutConfig, this.layoutEl.current)
    layout.init()
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', layout.updateSize.bind(layout))
    panelConfigs.forEach(this.renderPanel(layout))
  }

  renderPanel = layout => config => {
    const menuEl = this.menuEl.current
    const createDragSource = el => layout.createDragSource(el, config)

    layout.registerComponent(
      config.component,
      PanelWrapper(PanelCounter, this.props.store)
    )

    ReactDOM.render(
      <li ref={createDragSource}>
        {`Drag ${config.title} Panel`}
      </li>,
      menuEl
    )
  }
}

LayoutWrapper.propTypes = {
  store: PropTypes.object.isRequired,
}
