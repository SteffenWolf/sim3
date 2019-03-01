import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }
    render() {
      const {title, author_id, img, content, username } = this.props
      return(
        <div>
          <p>{this.props.title}</p>
          <img src={this.props.img} alt="profile"/>
          <p>{this.props.content}</p>
          <p> {this.props.author_id} </p>
        </div>
    )
  }
}

export default Post