import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productImage: this.props.productsData[this.props.match.params.productId]
        .image,
      productSection: this.props.productsData[this.props.match.params.productId]
        .section,
      productTitle: this.props.productsData[this.props.match.params.productId]
        .title,
      productPrice: this.props.productsData[this.props.match.params.productId]
        .price,
    };
  }

  render() {
    const {
      productImage,
      productSection,
      productTitle,
      productPrice,
    } = this.state;
    return (
      <div>
        <img src={productImage} alt={productTitle} />
        <p>{productSection}</p>
        <p>{productTitle}</p>
        <p>{productPrice}</p>
      </div>
    );
  }
}
