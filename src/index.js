import './firebase-config'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "../src/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../src/store';
import { CircularProgress } from '@mui/material';
import './firebase-config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={<CircularProgress />}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
