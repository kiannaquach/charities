import React from 'react';
import CharityCard from './CharityCard';

const photos = [
  "https://images.unsplash.com/photo-1518600570419-81324064e9ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=a190e2034e6a1bf50e05272881571b98",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=60b32a2c2514c4a0c6e36e8e204e523b",
  "https://images.unsplash.com/photo-1470754260170-299cad39501f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=b769e2fb58cb8e48eeebcc7446e56be1",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=882a6f1cddbb3b3b77a1289db317c8ff",
  "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=712c8c4bf5a79ce2181056e9dfb43728",
  "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=37b024bc3c5be79cc64d0360275275ec",
  "https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=ac656d766e02c3bceac5e81e3ea9081f",
  "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=3906822f9e70680ba107f70102d47cf4",
  "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=1a2d982b4b3cd5a9406516dca5ff6afe",  
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=057d2676a81fb62b38b65ed3178f9b5a",
  "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=be0a30af8209271cc9d501f4601e7fac",
  "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=9f68aef7ba5718e815977d36fce33410",
  "https://images.unsplash.com/photo-1504257365157-1496a50d48f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=7e45b8fb6fcf0b64108f288ffb63213a",
  "https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=2770fcff9dc223f47ac52e83cdba04e9",
  "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=d47f82d1060d4ccfcfadf0922974a5ce",
  "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=871e8974f41cb6665e97e3b790c8b2ef",
  "https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=517620a82c68e7108b5e29b60f59a52a",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=53963566aff03e6ac68c30c3e4eb8609",
  "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=1a2d982b4b3cd5a9406516dca5ff6afe",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=d4ff22a9c8ce9ba2074bebd631a92c96",
];

const searchPhotos = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=882a6f1cddbb3b3b77a1289db317c8ff",
  "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=d47f82d1060d4ccfcfadf0922974a5ce",  "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=393dcbbbe4387a6d54662fbda47dfa7e",
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=71fe5fdf77b99601457a9c844744a257",
  "https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=8088520682cfbda0c8c8d3670133d402",
  "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=02461c221b1b97576f3d5d52894acaee",
  "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=edc3585a836ef8f74a41eb7baab97a86",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=53963566aff03e6ac68c30c3e4eb8609",
  "https://images.unsplash.com/photo-1507539989371-99615e449486?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=e110302921f782a0e691d4e90c35018e",
  "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=1a2d982b4b3cd5a9406516dca5ff6afe",
  "https://images.unsplash.com/photo-1500837744038-ec60054ed01e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=ecb98240c2e8bdef7588c4e0f9928398",
  "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=9f68aef7ba5718e815977d36fce33410",
  "https://images.unsplash.com/photo-1504257365157-1496a50d48f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=7e45b8fb6fcf0b64108f288ffb63213a",
  "https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=2770fcff9dc223f47ac52e83cdba04e9",
  "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=d47f82d1060d4ccfcfadf0922974a5ce",
  "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=871e8974f41cb6665e97e3b790c8b2ef",
  "https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=517620a82c68e7108b5e29b60f59a52a",
  "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=37b024bc3c5be79cc64d0360275275ec",
  "https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=ac656d766e02c3bceac5e81e3ea9081f",
  "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=3906822f9e70680ba107f70102d47cf4",
  "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=1a2d982b4b3cd5a9406516dca5ff6afe",  
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=057d2676a81fb62b38b65ed3178f9b5a",
  "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMwODc5fQ&s=be0a30af8209271cc9d501f4601e7fac",
];

class Charities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container-fluid" style={{marginLeft: '-15px', marginTop: '100px'}}>
        <div className="display-flex flex-row">                    
          <div className="col-sm-12">
              <div>
                <div className="card-deck">
                  {
                    !this.props.searched ?
                    this.props.charities.map((charity, i)=> {
                      return <CharityCard key={i} charity={charity} photo={photos[i]}/>;
                    }) :
                    this.props.searchInfo.map((charity, i) => {
                      return <CharityCard key={i} charity={charity} photo={searchPhotos[i]}/>;
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