TODO API
--------

An API for TODO apps using Node.js, Express and PostgreSQL.

Deployed on Heroku as https://todo-api-warmup.herokuapp.com/lists.

* Setup
'npm install' should install all dependecies

To create the database structure run:
'node_modules/.bin/sequelize db:migrate'

* Envirorment Variables
Don't forget to properly set the envirorment variables (locally and on Heroku too)
Create an '.env' file and set the variables:
DB_HOST, DB_USER, DB_PASS (DB_HOST required only on Heroku)
