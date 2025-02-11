import React from 'react'
import BasicForm from './components/Basicform'
import ComplexForm from './components/Complexform'
import TwoWayBinding from './components/Twowaybinding'
import FormEvents from './components/Events'
import FormValidation from './components/Formvalidation'

const App = () => {
  return (
    <div>
      <BasicForm/>
      <ComplexForm/>
      <TwoWayBinding/>
      <FormEvents/>
      <FormValidation/>
    </div>
  )
}

export default App
