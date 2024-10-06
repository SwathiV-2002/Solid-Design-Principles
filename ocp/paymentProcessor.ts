import { PaymentMethod } from './paymentMethod';

export class PaymentProcessor {
    processPayment(paymentMethod: PaymentMethod, amount: number): void {
      paymentMethod.pay(amount);
    }
  }