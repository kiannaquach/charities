import React from 'react';
import CharityCard from './CharityCard';

class Charities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container-fluid" style={{marginLeft: '-15px'}}>
        <div className="d-flex flex-row">                    
          <div className="col-sm-12">
              <div>
                <div className="card-deck">
                  {
                    !this.props.searched ?
                    this.props.charities.map((charity, i)=> {
                      return <CharityCard key={i} charity={charity}/>;
                    }) :
                    this.props.searchInfo.map((charity, i) => {
                      return <CharityCard key={i} charity={charity}/>;
                    })
                  }
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Charities;