How to run this project

- `yarn`

- `yarn start`

Project routes

- /users
  - GET 
    - body -> {}
    - parameter -> user id
    - return -> selected user with parameter id 
  - POST
    - body -> {
        - name,
        - cpf,
        - birthDate,
        - email@qwe.com,
        - password,
        - id
    }
    - return -> {}
  - PUT
    - parameter -> user id
    - body -> {
        - id,
        - name, 
        - cpf, 
        - birthDate,
    }
    - return -> user with parameter id
  - DELETE
    - parameter -> user id
    - body -> {}
    - return -> user with parameter id

- /login
  - POST 
    - body -> {
      - email,
      - password
    }
