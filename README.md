# ts-rest example

## Prerequisites

- Node.js v18
- Docker

## Procedure

```
$ sudo service docker start
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

$ npm install
$ cd packages/contract
$ npm run build
$ cd -

$ cd packages/server
$ npx prisma migrate dev --name init
$ npm start dev
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
