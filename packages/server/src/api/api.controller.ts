import { Controller } from '@nestjs/common';
import { contract } from '@foo-api/contract';
import {
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';
import { ApiService } from './api.service';

const c = nestControllerContract(contract);
type RequestShapes = NestRequestShapes<typeof c>;

// You can implement the NestControllerInterface interface to ensure type safety
@Controller()
export class ApiController implements NestControllerInterface<typeof c> {
  constructor(private readonly apiService: ApiService) {}

  @TsRest(c.getPosts)
  async getPosts(
    @TsRestRequest()
    { query: { take, skip, search } }: RequestShapes['getPosts']
  ) {
    const { posts, totalPosts } = await this.apiService.getPosts({
      take,
      skip,
      search,
    });

    return {
      status: 200 as const,
      body: { posts, count: totalPosts, skip, take },
    };
  }

  @TsRest(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: RequestShapes['getPost']) {
    const post = await this.apiService.getPost(id);

    if (!post) {
      return { status: 404 as const, body: null };
    }

    return { status: 200 as const, body: post };
  }

  @TsRest(c.createPost)
  async createPost(@TsRestRequest() { body }: RequestShapes['createPost']) {
    const post = await this.apiService.createPost({
      title: body.title,
      content: body.content,
      published: body.published,
      description: body.description,
    });

    return { status: 201 as const, body: post };
  }

  @TsRest(c.updatePost)
  async updatePost(
    @TsRestRequest() { params: { id }, body }: RequestShapes['updatePost']
  ) {
    const post = await this.apiService.updatePost(id, {
      title: body.title,
      content: body.content,
      published: body.published,
      description: body.description,
    });

    return { status: 200 as const, body: post };
  }

  @TsRest(c.deletePost)
  async deletePost(
    @TsRestRequest() { params: { id } }: RequestShapes['deletePost']
  ) {
    await this.apiService.deletePost(id);

    return { status: 200 as const, body: { message: 'Post Deleted' } };
  }

  @TsRest(c.testPathParams)
  async testPathParams(
    @TsRestRequest() { params }: RequestShapes['testPathParams']
  ) {
    return { status: 200 as const, body: params };
  }
}
