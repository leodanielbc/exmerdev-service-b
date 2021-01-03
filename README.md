## Description
Este microservicio almacena el name, lastname, phone y la referencia de las credenciales del SERVICIO A en la base de datos.
Envia una respuesta con los datos que se guardaron en la BD.

- [SERVICIO A](https://github.com/leodanielbc/exmerdev-service-a)

## Tecnologies

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- RabbitMQ
- MongoDB
- Docker

## Installation

```bash
$ npm install
```

## Running the app

```bash

# conf docker rabbit
$ docker-compose up -d rabbit

# check container
$ docker-compose ps

# Unico Entorno de desarrollo
Se debe agregar el archivo(entorno) dev.env en la carpeta configs_env

# Unico Entorno de desarrollo
$ npm run start:dev

```
