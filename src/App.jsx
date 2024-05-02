import { useEffect} from 'react'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import SideMenu from './components/SideMenu/SideMenu';
// Initialization for ES Users


function App() {

  return(
    <>
    <Routes>
      <Route path="/" element={<SideMenu/>} />

      
    </Routes>
        <script
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
        </>
  )
}

export default App
