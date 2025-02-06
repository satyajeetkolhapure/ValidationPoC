import { z } from 'zod';
import {
  extendZodWithOpenApi,
  OpenAPIRegistry,
} from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z); // Enable OpenAPI features in Zod
export const registry = new OpenAPIRegistry();

// Define Payment Method Schema
const PaymentMethodSchema = z
  .object({
    id: z.string().openapi({ example: '1' }),
    name: z.string().openapi({ example: 'Visa' }),
    type: z
      .enum(['credit_card', 'debit_card', 'paypal'])
      .openapi({ example: 'credit_card' }),
  })
  .openapi('PaymentMethod');

// Define Payment Methods Response Schema
export const PaymentMethodsResponseSchema = z
  .object({
    methods: z.array(PaymentMethodSchema),
  })
  .openapi('PaymentMethodsResponse');

// Register Schema in OpenAPI Registry
registry.register('PaymentMethodsResponse', PaymentMethodsResponseSchema);
