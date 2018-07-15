import React from 'react';
import { Carousel } from 'react-bootstrap';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  render() {
    return(
      <div>
        image carousel
      </div>
    );
  }
}
export default ImageCarousel;