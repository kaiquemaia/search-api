import axios from 'axios';

const api = axios.create({ baseURL: 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo'});

export default api;
