import Box from "../Asgaard sofa/box"
 import Sofa from "../Asgaard sofa/description"
 import Description from "../Asgaard sofa/related" 
 import Related from "../Asgaard sofa/sofa"
export default function Home(){
    return(
       <div>
        <Box/>
        <Sofa/> 
       < Description/>
      < Related/>
       </div>
    )
}