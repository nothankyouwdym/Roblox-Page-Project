import MakePass from "./MakePass"


const Store = () =>{
  return(
    <section>
      <h1>Passes</h1>

      <MakePass name={"2X Cash"}/>
      <MakePass name={"2X Experiance"}/>
      <MakePass name={"Getting Better"} />
    </section>
  )
}


export default Store