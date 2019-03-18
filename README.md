# Project #3. Private Blockchain with GET and POST API Endpoints

## I used express framework for creating the API.

To setup and start the project do the following:
1. Get the project. 
2. Run command __npm install__ to install the project dependencies.
3. Run command __npm start__ in the root directory to start the project. You can also start it using __node app.js__.

## How to use the API
1. To get a block using its height make a GET request to the following URL:
  http://localhost:8000/block/height
 where __height__ in the above url is a positive integer.
2. To post a block with the a __body__ payload make a POST request to the following URL:
 http://localhost:8000/block
An example request looks like the following:
```
{
      "body": "Testing block with test string data"
}
```
