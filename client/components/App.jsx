import React from 'react';
// import Menu from './Menu.jsx';
import ImageCarousel from './ImageCarousel';
// import { Route,NavLink,HashRouter } from "react-router-dom";
import Search from './Search';
import Charities from './Charities';
import Registration from './Registration';
import $ from 'jquery';
import Sticky from 'react-stickynode';
import Particles from 'react-particles-js';

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

  // getPhotos() {
  //   $.ajax({
  //     url: '/images',
  //     method: 'GET',
  //     success: (response) => {
  //       // console.log(response.results);
  //       this.setState ({
  //         photos: response.data
  //       });
  //     }, 
  //     error: (err) => {
  //       console.log('you failed', err);
  //     }
  //   });  
  // }

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
      searched: !this.state.searched
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
        <div className="primary-header container group">
          <div className="left-box">
            <button>Menu
            </button>
            <div className="search">
              <Search handleSearch={this.handleSearch.bind(this)} />
            </div>
          </div>
          <div className="right-box">
            <div className="register">
              <Registration />
            </div>
            <button>DONATE!</button>
          </div>

          <header id="header">
            <div>thkq.</div>
          </header>
        </div>

        <div className="container">
          <div>
            {/* <ImageCarousel /> */}
          </div>
          <div className="mt-5">
            <Charities charities={this.state.info} searched={this.state.searched} searchInfo={this.state.searchInfo}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
