import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { contract } from "@foo-api/contract";
import { generateOpenApi } from "@ts-rest/open-api";
import { SwaggerModule } from "@nestjs/swagger";
import { WinstonModule } from "nest-winston";
import { format, transports } from "winston";
//import { Mail } from "winston-mail"; // npm i winston-mail && npm i -D @types/winston-mail
//import * as DailyRotateFile from "winston-daily-rotate-file"; // npm i winston-daily-rotate-file

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new transports.Console({
          format: format.combine(format.timestamp(), format.logstash()),
        }),
        // new DailyRotateFile({
        //   dirname: "./logs",
        //   filename: "app.log",
        //   maxFiles: 7,
        //   format: format.combine(format.timestamp(), format.logstash()),
        // }),
        //new Mail({level: "ERROR", host: "", port: ,from: "",to: "", }),
      ],
    }),
  });

  const document = generateOpenApi(contract, {
    info: {
      title: "Posts API",
      version: "1.0.0",
    },
  }, {
    setOperationId: true,
  });
  document.components = {
    securitySchemes: { basicAuth: { type: "http", scheme: "basic" } },
  };
  document.security = [{ "basicAuth": [] }];

  SwaggerModule.setup("api", app, document);
  //                   ^ Path for swagger

  await app.listen(3000);
}
bootstrap();

// swagger-ui: http://localhost:3000/api
// spec: http://localhost:3000/api-json
