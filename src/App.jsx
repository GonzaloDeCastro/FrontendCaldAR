import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'react-redux';
import { Provider } from 'react-redux';
//import rootReducer from '.redux/reducers/rootReducer';
import Routes from './Routes';

const configureStore = () => {
  const enhancer = composeWithDevTools();
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
