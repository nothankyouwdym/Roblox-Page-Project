import { useState } from "react"




const Sidebar = () =>{
  const [title,setTitle] = useState("Boubacar's Game")
  const [author,setAuthor] = useState("Boubacar")
  return(
    <section id="sidebar">
      <h1>Img</h1>
      <h1>{title}</h1>
      <h4 id="author">By: {author}</h4>
    </section>
  )
}


export default Sidebar