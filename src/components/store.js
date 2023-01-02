const { createStore } = require('redux');
const { default: rootReducer } = require('./reducers');

const store = createStore(rootReducer);
export default store;
