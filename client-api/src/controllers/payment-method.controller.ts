import { Controller, Get } from '@nestjs/common';
import { PaymentMethodService } from '../services/payment-method.service';

@Controller('payment-methods')
export class PaymentMethodController {
  constructor(private readonly service: PaymentMethodService) {}

  @Get()
  async getAndValidatePaymentMethods() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await this.service.fetchPaymentMethods();
      const validation = this.service.validatePaymentMethods(data);
      if (!validation.success) {
        return {
          error: 'Response validation failed',
          details: validation.error.format(),
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      return { message: '✅ Response data is valid', data };
    } catch (error) {
      return {
        error: '❌ Failed to fetch or validate data',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        details: error.message,
      };
    }
  }
}
