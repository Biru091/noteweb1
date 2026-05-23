 import Main from "./main"
 import { Trash } from 'lucide-react';

 function Aaam({title,parag,count,ondelete}){

    return(
    <>
    
       <div className="icon" onClick={ondelete}>
            <Trash/>
          </div>
        <p>{count}</p>
          <h5>{title}</h5>
          <p>{parag}</p>
         
          
          
    <hr/>
  </>
        
    
      
    )
    
}
export default Aaam;