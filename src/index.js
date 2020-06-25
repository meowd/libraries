import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {renderRoutes} from "react-router-config";
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import appCombineReducer from "./app/appCombineReducer";
import appRoutes from "./app/appRoutes";
import "./css/app.css";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(appCombineReducer);

const app = (
  <Provider store={store}>
    <ConfigProvider locale={ruRU}>
      <BrowserRouter>
        {renderRoutes(appRoutes)}
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
