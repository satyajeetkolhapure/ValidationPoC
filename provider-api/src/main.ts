import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { writeDocumentation } from './openapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const openApiSchema = writeDocumentation();
  // Serve Swagger documentation
  SwaggerModule.setup('api-docs', app, openApiSchema);

  // Generate OpenAPI YAML file on startup
  writeDocumentation();

  await app.listen(3000);
}
bootstrap();
