import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIObject } from '@asteasolutions/zod-to-openapi/dist/types';
import * as yaml from 'yaml';
import * as fs from 'fs';
import { registry } from './schemas/payment-methods.schema';

function generateOpenApiDocs() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  const openApiDocument = generator.generateDocument({
    openapi: '3.0.0',
    info: {
      title: 'Provider API',
      description: 'API for fetching available payment methods',
      version: '1.0.0',
    },
    servers: [{ url: '/api' }],
  });

  return openApiDocument;
}

export function writeDocumentation(): any {
  const docs = generateOpenApiDocs();
  const yamlContent = yaml.stringify(docs);

  fs.writeFileSync(`${__dirname}/openapi-docs.yml`, yamlContent, {
    encoding: 'utf-8',
  });
  console.log('✅ OpenAPI documentation generated!');
  return docs as unknown as OpenAPIObject;
}
