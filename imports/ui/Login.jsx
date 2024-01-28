import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        console.error("Login Error:", error);
        setErrorMessage(error.reason);
      } else {
        setEmail('');
        setPassword('');
        setErrorMessage('');
         window.location.href = '/dashboard';
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
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
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
};
