import React from 'react'
import ReactDOM from 'react-dom'
import GoldenLayout from 'golden-layout'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'

import Panel from './Panel'
import {config} from '../config'
import {wrapPanel} from '../utils/panel-utils'

export default class GoldenLayoutWrapper extends React.Component {
  componentDidMount() {
    const { store } = this.context
    const menuDom = this.menu

    const layout = new GoldenLayout(config, this.layout)
    const panels = config.content[0].content
    panels.forEach(addPanel)

    layout.init()

    window.addEventListener('resize', () => {
      layout.updateSize()
    })

    function addPanel (config) {
      layout.registerComponent(config.component,
        wrapPanel(Panel, store)
      )
      const createDragSource = element => {
        layout.createDragSource(element, config)
      }

      ReactDOM.render(<li
        ref={createDragSource}
      >{`Drag ${config.title} Panel`}</li>, menuDom)
    }
  }

  render() {
    return (
      <div>
        <ul id='menuContainer' ref={el => this.menu = el}></ul>
        <div id='layoutContainer' ref={el => this.layout = el}/>
      </div>
    )
  }
}

GoldenLayoutWrapper.contextTypes = {
  store: PropTypes.object.isRequired
}
