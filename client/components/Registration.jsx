import React from 'react';
import $ from 'jquery';
import { Button, Modal } from 'react-bootstrap';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      form: false,
      login: false,
      createStyle: 'none',
      redirect: '',
      loginInfo: [],
      style: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      favoriteCharities: ''
    };
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

 firstNameOnChange(e) {    
    this.setState({
     firstName: e.target.value
    });
  }

  lastNameOnChange(e) {    
    this.setState({
     lastName: e.target.value
    });
  }

  emailOnChange(e) {    
    this.setState({
      email: e.target.value
    });
  }

  passwordOnChange(e) {    
    this.setState({
      password: e.target.value
    });
  }

  favoriteCharitiesOnChange(e) {
    this.setState({
      favoriteCharities: e.target.value
    });
  }

  postRegistration() {
    this.setState({
      form: !this.state.form,
      style: 'none'
    }, () => {console.log(this.state.form);});

    const registrationInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      favoriteCharities: this.state.favoriteCharities
    };

    console.log('you clicked!', this.state.registrationInfo);

    $.ajax({
      url: '/registration',
      method: 'POST',
      data: registrationInfo, 
      success: (data) => {
        console.log('success registration', data);
        if (data) {
          this.setState({
            redirectTo: '/login'
          });
        } else {
          console.log('Sign-Up error');
        }
      }, 
      error: (err) => {
        console.log('registration failed', err);
      }
    });
  }

  handleLogin() {
		this.setState ({
			login: true
		});
  }
  
  getLoginInfo() {
    $.ajax({
      url: '/registration',
      method: 'GET',
      success: (data) => {
        this.setState({
          loginInfo: data
        });
      }, 
      error: (err) => {
        console.log('registration failed', err);
      }
    });   
  }

  renderAccountSummary() {
    this.getLoginInfo();

    return (
      <div>
        {
          this.state.loginInfo.slice(-1).map((info) => {
            return (<div>
              <div>FIRST NAME: {info.firstName}</div>
              <div>LAST NAME: {info.lastName}</div>
              <div>EMAIL: {info.email}</div>
              <div>FAVORITE CHARITY: {info.favoriteCharity}</div>
            </div>);
          })
        }
      </div>
    );
  }

  toggleLogin() {
    this.setState({
      login: !this.state.login
    });
  }

  render() {
    return(
      <div>
        {/* <button type="button" class="btn btn-light">Light</button> */}
        <Button bsSize="large" onClick={this.handleShow} style={{marginRight: '30px'}}>
          SIGNUP / LOGIN
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} style={{fontFamily: 'lato'}}>

          <Modal.Header closeButton>
          <Modal.Title>REGISTRATION / LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{fontFamily: 'lato'}}>
            <form action='/'>

            
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" onChange={(e) => this.firstNameOnChange(e)}/>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" onChange={(e) => this.lastNameOnChange(e)}/>
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => this.emailOnChange(e)}/>
              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.passwordOnChange(e)}/>
            </div>

            <div className="form-group">
              <label>Favorite Charities</label>
              <input className="form-control" placeholder="Favorite Charities" onChange={(e) => this.favoriteCharitiesOnChange(e)}/>
            </div>
            </form>

            <button className="btn btn-primary" onClick={() => this.postRegistration()}>Submit</button>
            {
              this.state.form && 
              <div>
                <div className="container" style={{fontSize: 20}}>
                ACCOUNT CREATED!
                {this.renderAccountSummary()}
                </div>
              </div>
            }

            <div>
              <h3>Have an account?</h3>
              <button className="btn btn-primary" onClick={() => this.toggleLogin()}>Log in></button>
            </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Registration;