import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';
import Donate from './Donate';
import Search from './Search';
import Charities from './Charities';
import Registration from './Registration';
import $ from 'jquery';
import Sticky from 'react-stickynode';
// import { Route,NavLink,HashRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      searchInfo: [],
      searched: false,
      photos: [],
    };
  }

  componentDidMount() {
    this.getCharities();
    // this.getPhotos();
  }

  getCharities() {
   $.ajax({
     url: '/charities-info',
     method: 'GET',
     success: (response) => {
      //  console.log(response);
       this.setState ({
         info: response.data
       });
     }, 
     error: (err) => {
       console.log('you failed', err);
     }
   });
  }

  getPhotos() {
    $.ajax({
      url: '/images',
      method: 'GET',
      success: (response) => {
        // console.log(response);
        this.setState ({
          photos: response
        });
      }, 
      error: (err) => {
        console.log('you failed', err);
      }
    });  
  }

  getSearch() {
    $.ajax({
      url: '/charities',
      method: 'GET',
      success: (response) => {
        this.setState ({
          searchInfo: response
        });
      }, 
      error: (err) => {
        console.log('you failed', err);
      }
    });
  }

  handleSearch(query) {
    // console.log(`${query} was searched`);
    this.setState({
      searched: true
    });

    $.ajax({
      url: '/charities',
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
    this.getSearch();
    return(
      <div>
        <div className="container">
        <div className="menu"><DropdownMenu /></div>
        <div className="register-button"><Registration /></div>
        <div id="title" className="primary-header">
          <span style={{marginLeft: '100px'}}>thkq.</span>
        </div>

        <Search handleSearch={this.handleSearch.bind(this)} /> 
 
        {/* <Donate /> */}

          <div>
            {/* <ImageCarousel /> */}
          </div>
          <div className="mt-5">
            <Charities charities={this.state.info} searched={this.state.searched} searchInfo={this.state.searchInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
