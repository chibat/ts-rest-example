import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ApiService } from './api/api.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ApiService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(appController.getPost({})).toBe('Hello World!');
    });
  });
});
