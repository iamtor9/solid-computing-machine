# how to use each endpoint and what it returns

- `/api/signup` - the methods below explain the structure that is to be sent and that will be sent back out
    - `post`
        - `input` - this will try to create a user based on the given body data <br>
        BODY
        ```JSON
        {
            "email": "example@website.com",
            "password": "12345678",
            "pin": "1234",
            "contacts": [{
                "phoneNumber": 12345678910,
                "lastName": "Customer",
                "firstName": "Joe"
            }]
        }
        ```
        - `response` - JSON web token <br>
    <hr>
- `/api/login` - the methods below explain the structure that is to be sent and that will be sent back out
    - `post`
        - `input`<br>
        BODY
        ```JSON
        {
            "email": "example@website.com",
            "password": "12345678"
        }
        ```
        - `response` - JSON web token <br>
    <hr>
- `/api/contacts` - the methods below explain the structure that is to be sent and that will be sent back out
  - `post` - this will add contacts to the user provided in the token
    - `input` <br>
      HEADERS
      ```
      authorization = bearer JSON_WEB_TOKEN
      ```
      BODY
      ```JSON
      {
          "contacts": [{
              "phoneNumber": 12345678910,
              "lastName": "Customer",
              "firstName": "Joe"
          }]
      }
      ```
    - `response` - NEW JSON web token <br>
    <hr>
  - `delete` - this will delete contacts from the user provided in the token
    - `input` <br>
      HEADERS
      ```
      authorization = bearer JSON_WEB_TOKEN
      ```
      BODY
      ```JSON
      {
          "contacts": [ObjectIDs ...]
      }
      ```
    - `response` - JSON web token <br>
    <hr>