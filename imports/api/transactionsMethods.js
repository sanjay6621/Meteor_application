import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Transactions } from './transactions';
import { Loans } from './loans'; // Assuming Loans is in the same directory

Meteor.methods({
  'transactions.pay'(loanId) {
    check(loanId, String);
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to make a payment.');
    }
    const loan = Loans.findOne({ _id: loanId });
    if (!loan) {
      throw new Meteor.Error('loan-not-found', 'Loan not found.');
    }
    if (loan.status !== 'pending') {
      throw new Meteor.Error('invalid-loan-status', 'This loan cannot be paid at this time.');
    }
    Transactions.insert({
      loanId: loanId,          // The ID of the loan being paid
      lenderId: this.userId,   // The ID of the user making the payment
      createdAt: new Date(),   // The current time
      status: 'completed'      // The status of the transaction
    });
    Loans.update(loanId, { $set: { status: 'paid' } });

  },
});
