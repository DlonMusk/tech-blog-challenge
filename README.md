# 14 Model-View-Controller (MVC): Tech Blog

## Description

For this challenge we were tasked with building a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was completely built from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)


## Installation

The applications dependancies will be installed by using the following command if run locally:

```bash
nmp i
```

## Usage

To visit the deployed app click [HERE](https://warm-woodland-22974.herokuapp.com/)

To run on your local machine:

First the user must create a .env file and enter DB_NAME, DB_USER and DB_PASSWORD for their mysql into the .env file 

Then

The user must create and seed the database by entring the following commands:
```bash
mysql -uroot -p
mysql> <enter your password here>
mysql> source ./db/schema.sql
mysql> exit
npm run seed
```

Then

The application will start with the following command:
```bash
npm start
```

## Credits
Software Developer: Dylan Knight