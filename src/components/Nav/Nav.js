import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 function Nav(props) {
   if (props.location.pathname !== '/'){
    console.log(1111111111, props.username, props.profile_pic);
     
     return(
       <div>
         <Link to={'/dashboard'} ><button>Home</button></Link>
         <Link to={'/new'} ><button>New Post</button></Link>
         <Link to={'/'}  ><button>Logout</button></Link>
         <h1> {props.username} </h1>
         <img src={props.profile_pic} alt='User Profile'/>
       </div>
     )
    } else {
      return null
   }  
}

const mapStateToProps = (reduxState) => {
  return {
    id: reduxState.id,
    username: reduxState.username,
    profile_pic: reduxState.profile_pic
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)