import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authSlice from './components/auth/authSlice';
import BaseLayout from './components/layout/BaseLayout';
import Pairing from './components/Pairing';
import Camera from './components/Camera'

let store = configureStore({
  reducer: authSlice
})

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<App />} />
            <Route path='/pairing' element={<Pairing />} />
            <Route path='/camera' element={<Camera />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

