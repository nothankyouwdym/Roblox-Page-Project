import {Link} from "react-router-dom"


const LowerComponent = () =>{
  return(
    <section id="lower">
      <h1><Link to="/About" id="lower-links-first">About</Link></h1>
      <h1><Link to="/About" id="lower-links">Store</Link></h1>
      <h1><Link to="/About" id="lower-links">Servers</Link></h1>
    </section>
  )
}


export default LowerComponent