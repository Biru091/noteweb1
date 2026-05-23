import { useState } from "react"
import Aaam from "./output"
function Main() {

  const [title, settitle] = useState("")
  const [parag, setparag] = useState("")
  const [notes,setnotes]=useState([])
  const [show, setshow] = useState(false)
  function deletenode(indextodelete){
    setnotes(notes.filter((_,index)=>index!=indextodelete));
  }
  function formhandle(e) {
    e.preventDefault()
    const newnote={
      title:title,
      parag:parag
    }
    setnotes([...notes,newnote])

    
    
    setshow(true)
  
    settitle("")
    setparag("")

  }

  return (
    <>
    
    <div id="head">
          <h2>Add Notes</h2>


    </div>
    <div className="main">
      <div>
      <form onSubmit={formhandle}>

        <input
          type="text" id="first"
          placeholder="Enter Heading"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea placeholder="Enter Details"
        value={parag}
          onChange={(e) => setparag(e.target.value)}
        />

        <button>Add Note</button>

      </form>
      </div>

      
        <div className="output">
          <h2>My Notes</h2>
          <hr/>

          {notes.map((note,index) =>(

            <Aaam  key={index} count={index} title={note.title} parag={note.parag}  
            
            ondelete={
              ()=>{
                deletenode(index)
              }
            }
            />
           
           ))
           
          
          }
          

     </div>


     
      
      </div>
    </>
  )
}

export default Main;