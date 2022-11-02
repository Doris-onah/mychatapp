import React from 'react';
import './style.css';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import StatusQ from "./StatusQ";
import Users from './Users';
import ErrorPage from './ErrorPage';
import UserProfile from './UserProfile';

export default function App() {
  return (
    <div className="app">
      <div className="app-con">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />}>
              <Route path="userprofile" element={<UserProfile />} />
              <Route path="statusq" element={<StatusQ/>}/>
              <Route path="Users" element={<Users />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </div>
  );
}
