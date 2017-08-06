import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap'
// import { Carousel } from 'react-bootstrap'

export default class ControlledCarousel extends Component {
    constructor(props){
        super(props)
        this.state= {index: 0, direction: null}
    }
      
  handleSelect(selectedIndex, e) {
    //   debugger
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <Carousel direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
        <Carousel.Item>
          <div className="headerImg" style={{"backgroundImage": "url(https://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=xx_large)"}}></div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="headerImg" style={{"backgroundImage": "url(https://a0.muscache.com/im/pictures/21162888/5a0f1151_original.jpg?aki_policy=xx_large)"}}></div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="headerImg" style={{"backgroundImage": "url(https://a0.muscache.com/im/pictures/6722906/b4bc6418_original.jpg?aki_policy=xx_large)"}}></div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="headerImg" style={{"backgroundImage": "url(https://a0.muscache.com/im/pictures/52149945/33130c63_original.jpg?aki_policy=xx_large)"}}></div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
};

