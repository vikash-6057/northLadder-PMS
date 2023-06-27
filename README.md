# northLadder-PMS
## Product Management System
## File structure
```
src/
├── config
│   └── database.ts
├── interfaces
│   ├── middlewares
│   │   ├── http_logger.ts
│   │   └── logger.ts
│   └── router.ts
├── modules
│   └── products
│       ├── controller
│       │   └── product_controller.ts
│       ├── dbmodel
│       │   └── product.ts
│       ├── repository
│       │   └── product_repository.ts
│       └── service
│           └── product_service.ts
└── server.ts
```

### Steps to set up the server <br>
```npm install```
<br>
make the .env file
<br>
add the necessary details
```
dbName
dbUser
dbHost
dbDriver
dbPassword
PORT
```
## Make sure MySQL server is running
<br>
Execute this command

```npm run start_dev```
# Further Improvements
1. Use dependency injection
2. Adding cache layer for fast retrieval of data
3. Adding authentication and authorization and roles
4. Write test
5. Config can be made better for production stage and local env