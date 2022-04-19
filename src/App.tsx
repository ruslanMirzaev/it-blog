import React from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <AppRouter/>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
