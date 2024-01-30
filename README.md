# Getting Started

- `npm install`
- In your `.env` file, add your `MONGODB_URI='mongodb+srv://kenwaysharma:<password>@cluster0.9zwguc4.mongodb.net/?retryWrites=true&w=majority'` to connect with DB
- `npm start`
  
## Environment Variables
1. `MONGODB_URI`
- MONGODB_URI: The URI for your MongoDB database.
- Make sure to add your mongoDB URI for connecting to the database.

## Technology Used
  - Nodejs
  - Express
  - MongoDB

## Middleware
- Using middleware to log all routes' access
  ```
  module.exports = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const accessToken = req.headers.authorization || 'N/A';
  
    const logMessage = `[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`;
    console.log(logMessage);
  
    next();
  }; ```

## All Routes
1. `/` 
   - `GET` Hello World!
2. `/users`
   - `GET` for fetching all users
   - `POST` for adding new user
3. `/users/:id`
   - `PUT` for updating a particular user
   - `DELETE` to delete a particular user
  
## Screenshot (using postman)

![Screenshot from 2024-01-31 05-11-17](https://github.com/kenwaysharma/node-express-mongoDB-crud-demo/assets/50889210/c00253b6-2cd2-4ed0-b8b3-95e48bdd7f90)
