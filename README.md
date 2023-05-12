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

> client@1.0.0 client
> ts-node client.ts

{
  id: 'clhgbp42n0002udpqalidv9dm',
  createdAt: '2023-05-09T13:44:11.940Z',
  updatedAt: '2023-05-09T13:44:11.940Z',
  title: 'Post Title',
  content: 'Post Content',
  description: null,
  published: false,
  tags: [],
  image: null
}
```
