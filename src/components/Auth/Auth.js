import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'


class Auth extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.register = this.register.bind(this)



  }

  componentDidMount() {
    // this.checkUser()
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  
  async register() {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try{
      let res = await axios.post('/api/auth/register', user);
      this.props.updateUser(res.data);
      this.props.history.push('/dashboard')
    } catch(err) {
      console.log(err)
      alert('That username is already taken, please create a different username.')
    }
  }

  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try{
      let res = await axios.post('/api/auth/login', user);
      this.props.updateUser(res.data);
      this.props.history.push('/dashboard')
    } catch(err) {
      console.log(err)
      alert('Incorrect username OR password')
    }
  }



    render() {
      const {username, password} = this.state;
      return(
        <div>
          <input placeholder='username' value={username} onChange={e => this.handleChange('username', e.target.value)}/>
            <br></br>
          <input type='password' placeholder='password' value={password} onChange={e => this.handleChange('password', e.target.value)}/>
            <br></br>
          <button onClick={this.login}>Login</button>
            <br></br>
          <button onClick={this.register}>Sign up</button>
        </div>
        )
  }
}


const mapStateToProps = (reduxState) => {
  return{
    
  }
}

const mapDispatchToProps = {
  updateUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)