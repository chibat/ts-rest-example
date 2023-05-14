import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { HealthModule } from './health/health.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, ApiModule],
  controllers: [AppController],
})
export class AppModule {}
