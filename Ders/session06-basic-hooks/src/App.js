// import './index.css'
// import { useState } from 'react'
// import ClassComponent from './components/ClassComponent'
// import FunctionalComponent from './components/FunctionalComponent'
import UsersAxios from './components/UsersAxios'

function App() {
  // const [classComp, setClassComp] = useState(true)
  // const [funcComp, setFuncComp] = useState(true)
  return (
    <div className="App">
      {/* <button onClick={() => setClassComp(!classComp)}>Toggle Class Comp</button>
      {classComp && <ClassComponent />} */}

      {/* <button onClick={() => setfuncComp(!funcComp)}>Toggle Func Comp</button>
      {funcComp && <FunctionalComponent />} */}
      {/* <ClassComponent />
      <FunctionalComponent /> */}
      <UsersAxios />
    </div>
  )
}

export default App
