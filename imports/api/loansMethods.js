import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Loans } from './loans';

Meteor.methods({
  'loans.request'(amount) {
    check(amount, Number);
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to request a loan.');
    }
    const maxLoanAmount = 10000;
    if (amount <= 0 || amount > maxLoanAmount) {
      throw new Meteor.Error('invalid-amount', 'Invalid loan amount.');
    }
    Loans.insert({
      borrowerId: this.userId, // The ID of the user making the request
      amount: amount,          // The requested loan amount
      createdAt: new Date(),   // The current time
      status: 'pending'        // The initial status of the loan
    });
  },
});
