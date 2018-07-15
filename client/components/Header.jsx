import React from 'react';
import DropdownMenu from './DropdownMenu';
import Donate from './Donate';
import Search from './Search';
import Registration from './Registration';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  render() {
    return(
      <div>
        <div className="left-box">
          <DropdownMenu />
          <div className="search">
            <Search handleSearch={this.handleSearch.bind(this)} />
          </div>
        </div>
        <div className="right-box">
          <div className="register">
            <Registration />
          </div>
          <Donate />
        </div>

          <header>
            <div id="title"><span>thkq</span></div>
          </header>
      </div>
    );
  }
}
export default Header;