
# Project Overview

- This project provides a simple microservices server that implments the microservice requirement for our projects.

- This service will return a random number between 0 and 999 as requested by our API contract.



# Running the Project

1. install dependencies
```
npm install
```

2. Run the Microservice Server
```
npm start
```


# Using the project 
1. make a post request on port 9700
```
curl -X POST http://localhost:9700 -H "Content-Type: application/x-www-form-urlencoded" -d ''
```
2. get a responce

```
[brian@fedora Client]$ curl -X POST http://localhost:9700 -H "Content-Type: application/x-www-form-urlencoded" -d ''

{"int":819}

[brian@fedora Client]$ 

```

# Example JS Request Code

this code sample will print the responce to the console log
```
var request = require('request');

request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     'http://localhost:9700',
    body:    ''
  },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);

```