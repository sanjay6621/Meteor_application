import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const LoanRequest = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanAmount = parseFloat(amount);
    if (isNaN(loanAmount) || loanAmount <= 0) {
      alert('Please enter a valid loan amount.');
      return;
    }
    Meteor.call('loans.request', loanAmount, (error) => {
      if (error) {
        alert('Error requesting loan: ' + error.reason);
      } else {
       
        setAmount('');
        alert('Loan requested successfully.');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          placeholder="Enter loan amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Request Loan</button>
    </form>
  );
};
