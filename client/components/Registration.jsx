import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
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

  addRegistration(query) {
    this.setState({
      searched: !this.state.searched
    });

    $.ajax({
      url: '/registration',
      method: 'POST',
      data: {query},
      success: (data) => {
        this.getSearch(query);
      }, 
      error: (err) => {
        console.log('you failed', err);
      }
    });
  }

  render() {
    return(
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Registration / Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registration / Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Sign Up</h1>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
            <br/>
            <br/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <br/>
            <br/>
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <br/>
            <br/>
            <button type="submit" class="signupbtn">Sign Up</button>
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