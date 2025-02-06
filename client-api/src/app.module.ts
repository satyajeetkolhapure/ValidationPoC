import { Module } from '@nestjs/common';
import { PaymentMethodController } from './controllers/payment-method.controller';
import { PaymentMethodService } from './services/payment-method.service';

@Module({
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class AppModule {}
