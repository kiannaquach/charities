import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      searched: false,
    };
  }

  onChange(e) {
    this.setState ({
      value: e.target.value
    }, console.log(this.state.value));
  }

  search() {
    this.props.handleSearch(this.state.value);
  }

  render() {
    return(
      <div>
        <div class="col-xs-6" style={{marginLeft: '300px', marginRight: '300px'}}>
          <div class="input-group">
            <input className="form-control mr-sm-2 mb-0 text-black" placeholder="join an org..." onChange={(e) => this.onChange(e)}/>
              <span class="input-group-btn" style={{paddingLeft: "50px"}}>
                <button className="btn btn-primary" onClick={() => this.search()}>go</button>
              </span>
          </div>
        </div>

      </div>
    );
  }

}

export default Search;
