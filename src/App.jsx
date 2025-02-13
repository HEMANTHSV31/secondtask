import React from 'react'
import Login from './Login'
import Datas from './Datas'
import { Route, Routes} from 'react-router-dom'
// import Login from './Login'
// import Data from './Data'
function App() {
  return (
  <>
  <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/datas" element={<Datas />} />
  </Routes>
  </>
  )
}

export default App
