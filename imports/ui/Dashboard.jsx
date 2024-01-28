import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Loans } from '/imports/api/loans';
import { Transactions } from '/imports/api/transactions';

const Dashboard = () => {
  const { loans, transactions, isLoading } = useTracker(() => {
    const noDataAvailable = { loans: [], transactions: [] };
    
    if (!Meteor.userId()) {
      return noDataAvailable;
    }

    const loansHandler = Meteor.subscribe('loans');
    const transactionsHandler = Meteor.subscribe('transactions');

    if (!loansHandler.ready() || !transactionsHandler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const loansData = Loans.find({}).fetch();
    const transactionsData = Transactions.find({}).fetch();

    return {
      loans: loansData,
      transactions: transactionsData,
      isLoading: false
    };
  }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <h2>Your Loans</h2>
      {loans.length === 0 ? (
        <p>No loans found.</p>
      ) : (
        loans.map(loan => <div key={loan._id}>Amount: {loan.amount}</div>)
      )}

      <h2>Your Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map(transaction => (
          <div key={transaction._id}>Status: {transaction.status}</div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
