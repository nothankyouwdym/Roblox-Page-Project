import { Outlet } from "react-router-dom"
import LowerComponent from "./LowerComponent"
import Sidebar from "./Sidebar"



const App = () =>{
  return(
    <section>
      <Sidebar />
      <LowerComponent />
      <Outlet />
    </section>
  )
}

export default App