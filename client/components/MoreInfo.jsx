import React from 'react';
import { Button, Popover, Tooltip, Modal } from 'react-bootstrap';

class MoreInfo extends React.Component {
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
    const popover = (
      <Popover id="modal-popover" title="popover">
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return(
      <div>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Charity Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>{this.props.charity.charityName}</h1>
            <label><b>EIN: {this.props.charity.ein}</b></label>
            <br/>
            <br/>
            <label><b>DONATION URL: {this.props.charity.donationUrl}</b></label>
            <br/>
            <br/>
            <label><b>City: {this.props.charity.city}</b></label>
            <br/>
            <br/>
            <label><b>State: {this.props.charity.state}</b></label>
            <br/>
            <br/>
            <label><b>ZipCode: {this.props.charity.zipcode}</b></label>
            <br/>
            <br/>
            <label><b>Score: {this.props.charity.score}</b></label>
            <br/>
            <br/>
            <label><b>Accepting Donations: {this.props.charity.acceptingDonations}</b></label>
            <br/>
            <br/>
            <label><b>Category: {this.props.charity.category}</b></label>
            <br/>
            <br/>
            <Button bsStyle="primary" bsSize="small">Donate</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default MoreInfo;