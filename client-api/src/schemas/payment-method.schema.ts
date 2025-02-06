import { z } from 'zod';
import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const PaymentMethodSchema = z
  .object({
    id: z.string().openapi({ example: '1' }),
    name: z.string().openapi({ example: 'Visa' }),
    type: z
      .enum(['credit_card', 'debit_card', 'paypal'])
      .openapi({ example: 'credit_card' }),
  })
  .openapi('PaymentMethod');

export const PaymentMethodsResponseSchema = z.object({
  methods: z.array(PaymentMethodSchema),
});

const registry = new OpenAPIRegistry();
registry.register('PaymentMethods', PaymentMethodsResponseSchema);
export const generator = new OpenApiGeneratorV3(registry.definitions);

export const openAPISpec: any = generator.generateDocument({
  openapi: '3.0.0',
  info: { title: 'Client API', version: '1.0.0' },
});
