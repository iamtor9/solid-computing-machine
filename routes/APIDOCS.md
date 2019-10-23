# How to use each endpoint and what it returns

# `/api/signup`
 - the methods below explain the structure that is to be sent, and that will be sent back out
    - `post`
        - `input` - this will try to create a user based on the given body data <br>
        BODY
            ```JSON
            {
                "email": "example@website.com",
                "password": "12345678",
                "pin": "1234",
                "firstName": "Jill",
                "lastName": "Customer",
                "contacts": [{
                    "phoneNumber": 12345678910,
                    "lastName": "Customer",
                    "firstName": "Joe"
                }]
            }
            ```
        - `response` - JSON web token <br>
# `/api/login` 
- the methods below explain the structure that is to be sent and that will be sent back out
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
# `/api/contacts` 
- the methods below explain the structure that is to be sent and that will be sent back out
  - `post` - this will add contacts to the user-provided in the token
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
  - `get` - this will get contacts from the user provided in the token
    - `input` <br>
      HEADERS
      ```
      authorization = bearer JSON_WEB_TOKEN
      ```
    - `response` - <br> 
    ARRAY
        ```JSON
        [
            {
                "phoneNumber": "12345678910",
                "lastName": "customer",
                "firstName": "joe",
            },
            {
                "phoneNumber": "12345678910",
                "lastName": "back",
                "firstName": "jack",
            }
        ]
        ```
    <br>
# `/api/password`
- the methods below explain the structure that is to be sent and that will be sent back out
    - `post`
        - `input`<br>
        HEADERS
            ```
            authorization = bearer JSON_WEB_TOKEN
            ```
            BODY
            ```JSON
            {
                "password": "12345678",
                "newPass": "87654321",
                "confirmNewPass": "87654321"
            }
            ```
    - `response` - JSON web token <br>
# `/api/alert` 
- the methods below explain the structure that is to be sent and that will be sent back out
    - `post`
        - `input`<br>
            HEADERS
            ```
            authorization = bearer JSON_WEB_TOKEN
            ```
            BODY - note numbers can be different
            ```JSON
            {
                "LAT":  44.9837924,
	            "LON": -93.1796153
            }
            ```
    - `response` - JSON web token <br>