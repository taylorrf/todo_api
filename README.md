TODO API
--------

An API for TODO apps using Node.js, Express and PostgreSQL.

Deployed on Heroku as https://todo-api-warmup.herokuapp.com/

#### Setup
`npm install` should install all dependecies

To create the database structure run:
`node_modules/.bin/sequelize db:migrate`

#### Envirorment Variables
Don't forget to properly set the envirorment variables (locally and on Heroku too)
Create an `.env` file and set the variables:
`DB_HOST, DB_USER, DB_PASS` (`DB_HOST` is required only on Heroku)


#### Endpoints


**User:**

*Creating a user*

`**POST** https://todo-api-warmup.herokuapp.com/user`
`Header: Content-Type: application/json`
`Body:  
{
  firebase_key: "something"
}
`


**To-do Lists:**


*Get all lists*
`**GET** https://todo-api-warmup.herokuapp.com/lists`
`Header: user_id: number`


*Create a list*


`**POST** https://todo-api-warmup.herokuapp.com/list`
Header: Content-Type: application/json
Body:  
{
  title: "something",
  user_id: number
}


*Delete a list*
`**DELETE** https://todo-api-warmup.herokuapp.com/list/:list_id`



**To-do Items:**

*Get all items from a list*
`**GET** https://todo-api-warmup.herokuapp.com/items/:list_id`


*Create a item*
`**POST** https://todo-api-warmup.herokuapp.com/item`
`Header: Content-Type: application/json`
`Body:  
{
  description: "something",
  list_id: number,
  user_id: number
}
`

*Checking an item as complete*
`**POST** https://todo-api-warmup.herokuapp.com/item/:item_id/checked`


*Delete a item*
`**DELETE** https://todo-api-warmup.herokuapp.com/item/:item_id`
