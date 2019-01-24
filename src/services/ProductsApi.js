import axios from 'axios';

const API_PRODUCTS_URL =
  'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json';

const getProductsData = () => axios.get(API_PRODUCTS_URL);

async function getProducts() {
  const { data } = await getProductsData();
  return data;
}

const API_CATALOGUE_URL =
  'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/catalog.json';

const getCatalogueData = () => axios.get(API_CATALOGUE_URL);

async function getCatalogue() {
  const { data } = await getCatalogueData();
  return data;
}

export { getProducts, getCatalogue };
