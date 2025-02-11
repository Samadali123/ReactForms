import React from 'react'
import BasicForm from './components/Basicform'
import ComplexForm from './components/Complexform'
import TwoWayBinding from './components/Twowaybinding'
import FormEvents from './components/Events'
import FormValidation from './components/Formvalidation'
import FormWithAPI from './components/FormwithApis'
import FormWithLoading from './components/Loadinginstates'
import BasicHookForm from './components/Basichookform'
import ValidatedForm from './components/HookValidation'
import FormWithAPI2 from './components/Hookfromwithapi'
import FormWithLoading2 from './components/Formwithloading2'

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <BasicForm />
      <ComplexForm />
      <TwoWayBinding />
      <FormEvents />
      <FormValidation /> */}
      {/* <FormWithAPI/>
      <FormWithLoading/> */}
      {/* <BasicHookForm/> */}
      {/* <ValidatedForm/> */}
      {/* <FormWithAPI2/> */}
      <FormWithLoading2/>
    </div>
  )
}

export default App
