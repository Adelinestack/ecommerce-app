import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Product from './Product';
import ProductsList from './ProductsList';
import { getProducts, getCatalogue } from '../services/ProductsApi';

import './App.css';

const Error = () => <div>404 PAGE</div>;

export default class App extends Component {
  state = {
    productsData: [],
    catalogueData: {},
  };

  componentDidMount() {
    this.fetchProducts();
    this.fetchCatalogue();
  }

  async fetchProducts() {
    const productsData = await getProducts();
    this.setState({
      productsData,
    });
  }
  async fetchCatalogue() {
    const catalogueData = await getCatalogue();
    this.setState({
      catalogueData,
    });
  }

  render() {
    const { productsData, catalogueData } = this.state;
    const loadingElement = productsData.length === 0 && <div>LOADING</div>;
    const allProductsList = () =>
      productsData.map(product => (
        <div key={product.id}>
          <Link to={`product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <p>{product.section}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </Link>
        </div>
      ));

    return (
      loadingElement || (
        <BrowserRouter>
          <div>
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to="/femme">FEMME</Link>
                  </li>
                  <li>
                    <Link to="/homme">HOMME</Link>
                  </li>
                  <li>
                    <Link to="/enfant">ENFANT</Link>
                  </li>
                </ul>
                <div>
                  <Link to="/">LOGO</Link>
                </div>
              </nav>
            </header>
            <Switch>
              <Route exact path="/" component={allProductsList} />
              <Route
                exact
                path="/:type"
                render={props => (
                  <ProductsList {...props} catalogueData={catalogueData} />
                )}
              />
              <Route
                exact
                path="/product/:productId/"
                render={props => (
                  <Product {...props} productsData={productsData} />
                )}
              />
              <Route path="/" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    );
  }
}
