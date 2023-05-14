import { Controller, Get } from "@nestjs/common";
import { HealthCheck, HealthCheckService } from "@nestjs/terminus";

@Controller("health")
export class HealthController {
  //private readonly logger = new Logger();

  constructor(
    private health: HealthCheckService,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    //this.logger.log("some message", { "some type": { aaa: "bbb" } });
    return this.health.check([]);
  }
}
