import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import App from './components/app/App.jsx';
import './styles/varables.scss';
import './styles/reset.scss';

//devtools настраивается под капотом - https://redux-toolkit.js.org/api/configureStore#devtools
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
