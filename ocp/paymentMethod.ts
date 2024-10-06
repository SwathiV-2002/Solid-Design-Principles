export interface PaymentMethod {
    pay(amount: number): void;
  }
  
  export class CreditCardPayment implements PaymentMethod {
    pay(amount: number): void {
      console.log(`Processing credit card payment of Rs ${amount}`);
    }
  }
  
  export class PayPalPayment implements PaymentMethod {
    pay(amount: number): void {
      console.log(`Processing PayPal payment of Rs ${amount}`);
    }
  }