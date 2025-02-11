import React from 'react'
import BasicForm from './components/Basicform'
import ComplexForm from './components/Complexform'
import TwoWayBinding from './components/Twowaybinding'
import FormEvents from './components/Events'
import FormValidation from './components/Formvalidation'
import FormWithAPI from './components/FormwithApis'

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <BasicForm />
      <ComplexForm />
      <TwoWayBinding />
      <FormEvents />
      <FormValidation /> */}
      <FormWithAPI/>
    </div>
  )
}

export default App
