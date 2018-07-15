import React from 'react';
import { Button, Popover, Tooltip, Modal } from 'react-bootstrap';

class Share extends React.Component {
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

  render() {
    return(
      <div>
        <Modal show={this.props.show} onHide={this.handleClose} style={{fontFamily: 'lato'}}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily: 'lato'}}>
            <div style={{fontFamily: 'lato'}}>
              <div style={{marginLeft: "100px"}}>
                <i class="fab fa-facebook-f fa-2x"></i>FACEBOOK
              </div>
              <div style={{marginLeft: "100px"}}>
                <i class="fab fa-twitter fa-2x"></i>TWITTER
              </div>
              <div style={{marginLeft: "100px"}}> 
                <i class="fab fa-google-plus-g fa-2x"></i>GOOGLE PLUS
              </div>
              <div style={{marginLeft: "100px"}}>
                <i class="fab fa-instagram fa-2x"></i>INSTAGRAM
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
export default Share;