import React from 'react';
import { Button } from 'react-bootstrap';

class CharityCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  render() {
    return(
      <div className="charity-card">
        <div className="charity-card card">
          <img className="card-img-top" src="https://images.unsplash.com/photo-1518600570419-81324064e9ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=a190e2034e6a1bf50e05272881571b98" alt="" />
            <div className="card-body">
              <h4 className="card-title">{this.props.charity.charityName}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{this.props.charity.missionStatement}</h6>
                  <p className="text-justify" style={{fontSize: '14px'}}>Accepting Donations: {this.props.charity.acceptingDonations}</p>
                      {this.props.charity.url}
              </div>
              <div className="card-footer">
                  <div className="clearfix">
                      <div className="float-left mt-1">
                          <Button bsStyle="info" bsSize="small">
                            Find out more 
                          </Button>
        
                          <Button bsStyle="info" bsSize="small">
                            Donate
                          </Button>
                      </div>
                      <div className="card-footer-badge float-right badge badge-primary badge-pill">
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default CharityCard;