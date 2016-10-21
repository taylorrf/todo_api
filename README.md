TODO API
--------
An API for TODO apps using Node.js, Express and PostgreSQL.

![(https://todo-api-warmup.herokuapp.com/)](https://raw.githubusercontent.com/taylorrf/todo_api/master/public/img/ToDo_API.jpg)

Deployed on Heroku as https://todo-api-warmup.herokuapp.com/

#### Setup
`npm install` to install all dependecies

To create the database structure run:
```sh
node_modules/.bin/sequelize db:migrate --source config/config.js
````

#### Stack
Here's a quick list of the most important parts of the tech stack to build it:
- NodeJS
- Express
- PostgreSQL
- Sequelize ORM

To create the documenation I'm using the great http://apidocjs.com who provides a quickly way to generate an beautiful doc using code annotations.


#### Envirorment Variables
Don't forget to properly set the envirorment variables (locally and on Heroku too)
Create an `.env` file and set the variables:
`DB_HOST, DB_USER, DB_PASS` (`DB_HOST` is required only on Heroku)




#### MIT License

Copyright (c) 2016 @taylorrf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
