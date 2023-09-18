import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PreviousComponent from './hooks/useprevious/PreviousComponent'
import StateHistoryCompoenent from './hooks/useStateWithHistory/StateHistoryCompoenent'
import StorageComponent from './hooks/useStorage/StorageComponent'
import AsyncComponent from './hooks/useAsync/asyncComponent'
import FetchComponent from './hooks/useFetch/FetchComponent'
import WindowSizeComponent from './hooks/usewindowSize/windowSizeComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Custom Hooks</h1>
      {/* <PreviousComponent /> */}
      {/* <StateHistoryCompoenent/> */}
      {/* <StorageComponent/> */}
      {/* <AsyncComponent/> */}
      {/* <FetchComponent/> */}
      {<WindowSizeComponent/>}
    </>
  )
}

export default App
