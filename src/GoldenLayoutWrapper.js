import React from 'react'
import ReactDOM from 'react-dom'
import GoldenLayout from 'golden-layout'
import PropTypes from 'prop-types'

import Panel from './panels/counter/PanelCounter'
import config from './layout.config'
import wrapPanel from './utils/panel-utils'

export default class GoldenLayoutWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.menu = React.createRef()
    this.layout = React.createRef()
  }

  componentDidMount() {
    const { store } = this.context
    const menuDom = this.menu.current
    const layout = new GoldenLayout(config, this.layout.current)
    const panels = config.content[0].content
    panels.forEach(addPanel)

    layout.init()

    window.addEventListener('resize', () => {
      layout.updateSize()
    })

    function addPanel(config) {
      layout.registerComponent(config.component,
        wrapPanel(Panel, store))
      const createDragSource = (element) => {
        layout.createDragSource(element, config)
      }

      ReactDOM.render(
        <li ref={createDragSource}>
          {`Drag ${config.title} Panel`}
        </li>,
        menuDom,
      )
    }
  }

  render() {
    return (
      <div>
        <ul id="menuContainer" ref={this.menu} />
        <div id="layoutContainer" ref={this.layout} />
      </div>
    )
  }
}

GoldenLayoutWrapper.contextTypes = {
  store: PropTypes.object.isRequired,
}
