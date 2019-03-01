import React, {Component} from 'react'
import axios from 'axios'
import Post from '../Post/Post'

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      post: [],
      myPosts: true,

    }
  }

  componentDidMount(){
    this.allPosts()
    this.checkUser()
  }

  checkUser = async () => {
    const {id} = this.props;
    if(!id) {
      try {
        let res = await axios.get('/api/current');      
        this.props.updateUser(res.data)
        this.props.history.push('/private')
      } catch (err) {
        console.log(err)
        }
      } else {
        this.props.history.push('/private')        
      }
    }

  allPosts() {
    axios.get('/api/posts').then(res => {
      this.setState({
        posts: res.data
      });
    });
  }
  

  togglePosts() {
    this.setState({
      myPosts: false
    })
    console.log(this.state.myPosts)
  }

  toggle
  
    render() {
      // const {post} = this.state
      // const mapPosts = this.state.posts.map(post => {
      //   return(
      //     <Post
      //     title={post.title}
      //     img={post.img}
      //     content={post.content}
      //     author_id={post.author_id}
      //     />
      //   )
      // })
      return(
        <div>
          <h1>Dashboard</h1>

          <input placeholder='Search by title'/>
          <button>Search</button>
          <button>Reset</button>
          <input type="checkbox" onClick={this.togglePosts}/>My Posts
          {/* {mapPosts} */}
            
        </div>
    )
  }
}

export default Dashboard