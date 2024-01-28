// LoanHistory.jsx
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Loans } from '/imports/api/loans';

export const LoanHistory = () => {
  const { loans, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe('userLoans');
    return {
      loans: Loans.find({ borrowerId: Meteor.userId() }).fetch(),
      isLoading: !handler.ready(),
    };
  });

  if (isLoading) {
    return <div>Loading loan history...</div>;
  }

  return (
    <div>
      <h3>Your Loan History</h3>
      {loans.length === 0 ? (
        <p>No loans found.</p>
      ) : (
        loans.map(loan => (
          <div key={loan._id}>
            Amount: {loan.amount}, Status: {loan.status}
          </div>
        ))
      )}
    </div>
  );
};
