# Vacpla - vacation as a service

## install and start frontend
```cd frontend```
```yarn install```
```yarn run start```

## start dev-db
```cd devdb```
```./start.sh```

## adding new user via rest-api
*Adding a user called user2 with ADMIN-Role and 42 days annual leave in the current year.*
```
POST http://localhost:8080/api/register
Accept: application/json
Cache-Control: no-cache
Content-Type: application/json

{
  "userName": "user2",
  "password": "asdfasdf",
  "entry": "7/1/2019",
  "role": "ADMIN",
  "initLeave": "42"
}
```