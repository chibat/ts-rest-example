```
npm install
cd packages/contract
npm install
npm run build
cd -
cd packages/server
npm start dev
cd packages/test-client
npm run client
```

```
 mkdir ts-rest-example2
 cd ts-rest-example2/
 touch package.json
 vi package.json
 vi .npmrc
 vi package.json
* npm init -w packages/contract -w packages/server -w packages/test-client
 vi package.json
 cd packages/
 cd server/
 cd ..
 mv server server.old
 cd ..
 vi package.json
 nest
* npm i -g @nestjs/cli
 vi .npmrc
 cd packages/
 cd contract/
 vi package.json
 cd ..
 cd packages/
 cd ..
* nest new packages/server --strict
 cd packages/server
*nstall prisma @nestjs/swagger @prisma/client @ts-rest/core @ts-rest/nest @ts-rest/open-api zod  
 cat ../server.old/package.json
 vi package.json
 cd ..
 npm install
 cd server
 cd ..
 cd test-client/
 vi package.json
 cd ..
 cd server
 vi package.json
 cd ..
 cd ..
 cd packages/
 cd server
 vi package.json
 cd ..
 cd contract/
 vi package.json
 cd ..
 cd ..
 cd packages/contract/
 cd ../..
* npm install typescript -D
 vi package.json
 cd packages/
 cd contract/
 vi package.json
 npm run build
 vi package.json
 npm run build
 cp ~/ts-rest-example/contract/contract-blog.ts .
 mv contract-blog.ts contract.ts
 vi contract.ts
 cd ../..
 npm install zod @ts-rest/core
 cd -
 npm run build
 vi package.json
 npm run build
 cp -i ~/ts-rest-example/contract/tsconfig.json .
 npm run build
 vi package.json
 cd ..
 cd server
 vi package.json
 cd ../..
 npm install
 cd -
 vi package.json
 cd ../..
 npm install
 cd -
 npm start dev
 vi tsconfig.json
 vi package.json
 npm run build
 vi tsconfig.build.json
 vi package.json
 npm start prod
 vi package.json
 node dist/main
```
