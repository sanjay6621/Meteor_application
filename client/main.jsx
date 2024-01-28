import React from 'react';
import ReactDOM from 'react-dom';
import { Register } from '../imports/ui/Register';
import { LoanRequest } from '../imports/ui/LoanRequest';
import Dashboard from '../imports/ui/Dashboard';
import { AdminPanel } from '../imports/ui/AdminPanel';
import { LoanHistory } from '../imports/ui/LoanHistory';
import { Login } from '../imports/ui/Login';
import { UserProfile } from '../imports/ui/UserProfile';
import App from '../imports/ui/App';

Meteor.startup(() => {
  ReactDOM.render(
    <div>
      <Register />
      <LoanRequest />
      <AdminPanel/>
       <App/>
       <Dashboard/>
       <LoanHistory/>
       <Login/>
       <UserProfile/>
    </div>,
    document.getElementById('react-target')
  );
});
