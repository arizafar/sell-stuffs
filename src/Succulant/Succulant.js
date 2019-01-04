import React, { Component } from 'react';
import './Succulant.scss';


export default class Succulant extends Component {
  state = {
    bought: false
  }

  handleBuy = () => {
    this.setState({
      bought: !this.state.bought
    });
  }

  render() {
    const { id, name, img, info, buy } = this.props.succulant;

    return (
      <article className='succulant'>
        <div className='img-container'>
          <img src={img} alt='succulant' />
          <span className="close-btn">
            <i className="fas fa-window-close" onClick={() => this.props.removeSucculant(id)} />
          </span>
        </div>
        <div className="info">
          <h3>{name}</h3>
          <h4>{info}</h4>
          <h5>Buy <span className="fa fa-shopping-cart" onClick={this.handleBuy}></span></h5>
          <h5>{this.state.bought && buy}</h5>
        </div>
      </article>
    )
  }
}
