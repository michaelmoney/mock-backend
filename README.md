# Mock Backend - small server for REST API mocks 

## Description
The **"mock-backend" Node server** allows you to easily mock **REST API** endpoints and speed-up development. It supports TypeScript and uses **[json-server](https://github.com/typicode/json-server)** _under the hood_. Included in this project **[faker.js](https://github.com/marak/Faker.js/)** tool helps generating mock-data for your models.

### Why do I need that?
If you use TypeScript for your client-side app (React/Angular/Vue) development you can easily share types and interfaces between front-end app and *mock-backend* server to speed-up development and increase developer's experience. And of course you get all the advantages of TypeScript language.


 **[json-server](https://github.com/typicode/json-server)** is pretty powerful tool for creating **REST API mocks**. It's also very simple.



Happy h4cking.

## Getting started

### 1. Download all dependencies:

**Install all needed dependencies:**
```bash
npm install
```

### 2. Run development server
Start local server under `http://localhost:3000/` URL with auto-reloading:

```bash
npm start
```

Open below URL inside your browser to retrieve JSON data related to `/employees` endpoint
```bash
http://localhost:3000/employees
```
or run **curl** command inside your terminal:
```bash
curl http://localhost:3000/employees
```
or use **[Postman](https://www.getpostman.com/)**.

**NOTE:** You can change `PORT` value in `src/server.ts` file.

### 3. Run inside Docker container

Build a Docker image:

```bash
npm run docker:build 
```

After successful build, run a Docker

```bash
npm run docker:run 
```


## 4. Other development details

The `src/db.json` file contains REST API routes configuration. 

The `src/server.ts` is the main entry TS file used to run node app instance. This file contains all necessary dependencies like "json-server". 

For more information check **json-server** documentation:
https://github.com/typicode/json-server
