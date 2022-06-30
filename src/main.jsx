import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Played from './Played'
import About from "./About"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
              <Route path="About" element={<About />}></Route>
          </Route>
          <Route path="Played" element={<Played />} />
      </Routes>
  </BrowserRouter>
)
