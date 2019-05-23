import React,{Component} from 'react';
import jwt_decode from 'jwt-decode';

class navbar extends Component{
	constructor(){
		super();
		this.state = {
      comicName : " ",
      username : ""
		}
    this.onChange = this.onChange.bind(this);
    this.LogOut = this.LogOut.bind(this);
  }

  // componentDidMount(){
  //   const user = localStorage.User
  //   const decoded = jwt_decode(user)
  //   this.setState({
  //     username : decoded.username
  //   })
  // }

	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
  }
  
  LogOut(e){
    e.preventDefault()
    localStorage.removeItem('User')
    window.location = "/home";
  }


	render(){
    var url = "/search" + "?" + "c=" + this.state.comicName;
    const signinsignuplink = (
      <ul className="navbar-nav">
        <li className="nav-item" >
          <a href ="/signin" className ="nav-link">
            Signin
          </a>
        </li>
        <li className="nav-item" >
          <a href ="/signup" className ="nav-link">
            Signup
          </a>
        </li>
      </ul>
    )


    const userlink = (
      <ul className="navbar-nav">
        <li className="nav-item" >
          <a href ="/storyboard" className ="nav-link">
            {
              localStorage.User ? JSON.parse(localStorage.getItem("User")).username : ""
            }
          </a>
        </li>
        <li className="nav-item" >
          <a href="" onClick = {this.LogOut} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )


    return (
      <nav className='grey darken-3'>
          <div className='brand-logo'>
            <ul className='right'>
              <li><b>Comic VN</b></li>
              <li><a href='./home' style={{padding: '0'}}><img src={"logo.png"} alt="logo" height = "63px"/></a></li>
            </ul>
            </div>
            <ul className='right'>
              <li>
                {localStorage.User ? userlink : signinsignuplink}
              </li>
              <li>
              <ul>
                <li><input type="search" results="5" autoSave="some_unique_value" name="comicName" autoComplete="off" onChange={this.onChange} aria-label="Search box" placeholder=" Search..." className="white-text"/></li>
                <li><a href={url}><i className="material-icons search-icon">search</i></a></li>
              </ul> 
              </li>
            </ul>
      </nav>);
	}
}
export default navbar;