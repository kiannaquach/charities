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
        <input placeholder="join an org..." onChange={(e) => this.onChange(e)}/>
        <button onClick={() => this.search()}>go</button>
      </div>
    );
  }
}
export default Search;