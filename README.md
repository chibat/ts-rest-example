# ts-rest example

## Features

- ts-rest
- OpenAPI Spec endpoint
- Swagger-UI
- Basic Authentication
- Healthcheck endpoint
- Logging logstash format
- Logging daily rotate(Option)
- Error email(Option)

## Prerequisites

- Node.js v18

## Procedure

```
$ npm install
$ cd packages/contract
$ npm run build
$ cd -
```

```
$ npm start
```

```
cd packages/test-client
$ npm run client

> @foo-api/test-client@1.0.0 client
> ts-node client.ts

{
  id: 'clhl7i11u0000ud38s7nadq31',
  createdAt: '2023-05-12T23:45:33.906Z',
  updatedAt: '2023-05-12T23:45:33.906Z',
  title: 'Post Title',
  content: 'Post Content',
  description: null,
  published: false,
  tags: [],
  image: null
}
```

## Swagger-UI

http://localhost:3000/api

## OpenAPI Spec response

http://localhost:3000/api-json

## healthcheck

http://localhost:3000/health

## TODO

- [x] Authentication
- [ ] Logging

## Reference

- Basic Authentication:
  https://www.stewright.me/2021/03/add-basic-auth-to-nestjs-rest-api/
