/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PaymentMethodsResponseSchema } from '../schemas/payment-method.schema';

@Injectable()
export class PaymentMethodService {
  private readonly providerApiUrl = 'http://localhost:3000/payment-methods';
  private readonly providerSwaggerUrl = 'http://localhost:3000/swagger.json';

  // async validateSwaggerDefinition() {
  //   try {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //     const { data: providerSpec } = await axios.get(this.providerSwaggerUrl);
  //     if (
  //       JSON.stringify(providerSpec.paths['/payment-methods']) !==
  //       JSON.stringify(openAPISpec.paths['/payment-methods'])
  //     ) {
  //       throw new Error(
  //         'Provider API Swagger definition does not match expected schema.',
  //       );
  //     }
  //     console.log('✅ Swagger definition matches expected schema.');
  //   } catch (error) {
  //     console.error('❌ Swagger validation failed:', error.message);
  //   }
  // }

  async fetchPaymentMethods() {
    const { data } = await axios.get(this.providerApiUrl);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  validatePaymentMethods(data: any) {
    return PaymentMethodsResponseSchema.safeParse(data);
  }

  // async onModuleInit() {
  //   await this.validateSwaggerDefinition();
  // }
}
