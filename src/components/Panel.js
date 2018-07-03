import React from 'react'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import LabelCounter from './LabelCounter'

export default function Panel() {
  return <div>
    <LabelCounter/>
    <IncrementButton/>
    <DecrementButton/>
  </div>
}
