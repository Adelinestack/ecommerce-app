import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function getProductsForAType(catalogueElements) {
  if (!catalogueElements) {
    return null;
  }
  if (catalogueElements[0] && catalogueElements[0].id) {
    return catalogueElements;
  } else if (_.isPlainObject(catalogueElements)) {
    return getProductsForAType(Object.values(catalogueElements));
  } else {
    return catalogueElements.map(catalogueElement =>
      getProductsForAType(catalogueElement)
    );
  }
}

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      match: {
        params: { type },
      },
      catalogueData,
    } = this.props;

    const catalogueForAType = _.get(catalogueData, type);
    const products = _.flattenDeep(getProductsForAType(catalogueForAType));
    return (
      <div>
        <div>{type}</div>
      </div>
    );
  }
}
