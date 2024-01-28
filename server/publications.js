import { Meteor } from 'meteor/meteor';
import { Loans } from '/imports/api/loans';
import { Transactions } from '/imports/api/transactions';

Meteor.publish('loans', function () {
  if (!this.userId) {
    return this.ready();
  }
  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Loans.find({});
  } else {
    return Loans.find({ borrowerId: this.userId });
  }
});

Meteor.publish('transactions', function () {
  // Ensure the user is logged in
  if (!this.userId) {
    return this.ready();
  }
  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Transactions.find({});
  } else if (Roles.userIsInRole(this.userId, 'lender')) {
    return Transactions.find({ lenderId: this.userId });
  } else {
    return this.ready();
  }
});
