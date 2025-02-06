import { Module } from '@nestjs/common';
import { PaymentMethodsController } from './payment-methods.controller';

@Module({
  controllers: [PaymentMethodsController],
})
export class AppModule {}
