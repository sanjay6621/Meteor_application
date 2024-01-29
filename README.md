# Meteor Application

This repository contains a Meteor application with user authentication, role-based access control, and functionality for managing loans and transactions. The application allows users to register, log in, request loans (as borrowers), manage loans (as lenders), and access admin functionalities.

## Features

- User authentication (login and registration)
- Role assignment (borrower, lender, admin)
- Loan request functionality for borrowers
- Loan payment confirmation for lenders
- Viewing loan and transaction history
- Admin panel for user and loan management

## Installation Guide

To get started with this application, follow these steps:

### Prerequisites

- Install [Meteor](https://www.meteor.com/install)
- Install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

### Setting Up the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/sanjay6621/Meteor_application.git
   cd Meteor_application
# Install dependencies: meteor npm install
# Start the application: meteor (The application will run on the any local host server -- ex: http://localhost:3000/ )

## Accessing MongoDB : 

While the application is running, open a new terminal window and use the following command to access the MongoDB shell:

- meteor mongo

Within the MongoDB shell, you can perform database operations such as querying collections:

- db.users.find({});
- db.loans.find({});
- db.transactions.find({});

## Deployment : 

To deploy the application, consider using services like Meteor Galaxy, Heroku, or DigitalOcean. Follow the deployment instructions provided by these services.

# Example for Meteor Galaxy:

- Set up your Meteor Galaxy account and follow the instructions to install the Meteor Up command line tool.

- Configure your mup.js file with the necessary settings.

- Deploy the app using: mup deploy








