import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Login } from './Login';
import { Register } from './Register';
import { LoanRequest } from './LoanRequest';
import { LoanHistory } from './LoanHistory'; // Component to show user's loan history
import { UserProfile } from './UserProfile'; // Component for user profile management
import { AdminPanel } from './AdminPanel'; // Admin-specific component

const App = () => {
  const user = useTracker(() => Meteor.user());

  // Determine the user's roles
  const isAdmin = user && Roles.userIsInRole(user._id, 'admin');
  const isLender = user && Roles.userIsInRole(user._id, 'lender');
  const isBorrower = user && Roles.userIsInRole(user._id, 'borrower');

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.emails[0].address}</h1>
          <LoanRequest />
          {/* Conditionally render components based on the user's role */}
          {isBorrower && <LoanHistory />}
          {isLender && <LoanRepayment />} 
          {isAdmin && <AdminPanel />}
          <UserProfile />
          {/* Add more components that should be visible to logged-in users */}
        </>
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;
