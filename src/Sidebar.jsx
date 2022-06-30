import { useState } from "react"
import { Link } from "react-router-dom"




const Sidebar = () =>{
  const [title,setTitle] = useState("Boubacar's Game")
  const [author,setAuthor] = useState("Boubacar")

  return(
    <section id="sidebar">
      <h1>{title}</h1>
      <h4 id="author">By: {author}</h4>
      <button id="play"><Link to="/Played" id="play-link">Play</Link></button>
    </section>
  )
}


export default Sidebar