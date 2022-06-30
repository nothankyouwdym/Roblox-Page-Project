import { useState } from "react"




const Sidebar = () =>{
  const [title,setTitle] = useState("Boubacar's Game")
  const [author,setAuthor] = useState("Boubacar")

  return(
    <section id="sidebar">
      <h1>{title}</h1>
      <h4 id="author">By: {author}</h4>
      <button id="play">Play</button>
    </section>
  )
}


export default Sidebar