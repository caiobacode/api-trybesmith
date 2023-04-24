<h1 align="center">🗡️  Trybe Smith  🗡️</h1>

<div align='center'>
<img width='300' alt="smith-img" src="./smith.jpg">
</div>


## Description
<p>Trybe Smith was the project that I started to learn about typing and generics. It was developed using TypeScript, and MySQL as the database management system.</p>

## 💻 Tecnologies used
> [![Typescript][Typescript]][Typescript-url]
[![Node.js][Node.js]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![MYSQL][MYSQL]][MYSQL-url]
[![DOCKER][DOCKER]][DOCKER-url]

## 🛠️ Instructions

### Notes
>This project run in port 3000.<br/>
>You can run this API with Docker or Node, you choose!

### 📚 Requirements to run this project:
- Git.
- Node.js - v >= 16.0 (if you wanna run with Node).
- MySQL - (if you wanna run with Node).
- NPM - v >= 7.0 (if you wanna run with Node).
- Docker - (if you wanna run with Docker).
- Docker-Compose - (if you wanna run with Docker).


<details>
    <summary><strong>🐳 Run with Docker(Recommended) 🐳</strong></summary>
    
```bash
# Clone the repo
git clone https://github.com/caiobacode/api-trybesmith.git

# Enter in repo
cd api-trybesmith

# Run DockerCompose
docker-compose up -d
```
</details>

<details>
    <summary><strong>🟢 Run with Node.JS ⬢</strong></summary>

```bash
# Clone the repo
git clone https://github.com/caiobacode/api-trybesmith.git

# Enter in repo
cd api-trybesmith

# Install dependencies
npm install
```
Now, you need to config your MySQL database
- First, define environment variables in your .env file;

```bash
# Create databse
npm run restore

# Start the application
npm start
```

</details>
<br/>

## 🔎 Additional details


<details>
    <summary><strong>🌐 API routes</strong></summary>

<br/>

> <strong>User Route</strong><br/>
- POST "/login" - Sign a user and return a JWT token.
- POST "/users" - Register a new user with the properties passed by the request.<br/>

> <strong>Products Route</strong><br/>
+ GET "/products" - Returns all products.<br/>
+ POST "/products" - Register a product with the properties passed by the request.<br/>

> <strong>Orders Route</strong><br/>
- GET "/orders" - Returns all orders.<br/>
- POST "/orders" - Register a order with the properties passed by the request.<br/>

</details>

  <details>
    <summary><strong>✏️ What i learned</strong></summary>

+ Hot to create a RESTFul API using TypeScript.
+ How to create Interfaces and Types in TypeScript.
+ How to create Middlewares to an API in TypeScript.
+ How to create Models and Read/Write to a MySQL database using TypeScript.
  
  </details>


[Typescript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org

[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com

[MYSQL]: https://img.shields.io/badge/MySQL-00758f?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com

[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com
