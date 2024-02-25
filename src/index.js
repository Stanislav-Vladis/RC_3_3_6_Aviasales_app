import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import App from './components/app/App.jsx';
import './styles/varables.scss';
import './styles/reset.scss';

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
