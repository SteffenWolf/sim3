import React from 'react'
import {withRouter} from 'react-router'

 function Nav(props) {
   console.log(props);
   if (props.location.pathname !== '/'){
     return(
       <div>
         
         
       </div>
     )
   } else {
     return null
   }  
}

export default withRouter(Nav)