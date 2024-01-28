import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('borrower'); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    Accounts.createUser({ email, password }, (error) => {
      if (error) {
        console.error("Registration Error:", error);
        setErrorMessage(error.reason);
      } else {
        Meteor.call('setUserRole', role, (error) => {
          if (error) {
            console.error("Setting Role Error:", error);
            setErrorMessage(error.reason);
          } else {
            setEmail('');
            setPassword('');
            window.location.href = '/dashboard';
          }
        });
      }
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="borrower">Borrower</option>
        <option value="lender">Lender</option>
        <option value="admin">Admin</option>
      </select>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Register</button>
    </form>
  );
};
