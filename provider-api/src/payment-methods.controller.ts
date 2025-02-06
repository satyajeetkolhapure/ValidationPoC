import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { registry } from './schemas/payment-methods.schema';

@ApiTags('Payment Methods')
@Controller('payment-methods')
export class PaymentMethodsController {
  @Get()
  @ApiOkResponse({
    description: 'List of available payment methods',
    content: {
      'application/json': {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        schema: registry.definitions.values['PaymentMethodsResponse'],
      },
    },
  })
  getPaymentMethods() {
    return {
      methods: [
        { id: '1', name: 'Visa', type: 'credit_card' },
        { id: '2', name: 'MasterCard', type: 'debit_card' },
        { id: '3', name: 'PayPal', type: 'paypal' },
      ],
    };
  }
}
