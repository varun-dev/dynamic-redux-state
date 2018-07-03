import React from 'react'
import ButtonIncrement from './components/ButtonIncrement'
import ButtonDecrement from './components/ButtonDecrement'
import LabelCounter from './components/LabelCounter'

export default function PanelCounter() {
  return <div>
    <LabelCounter/>
    <ButtonIncrement/>
    <ButtonDecrement/>
  </div>
}
