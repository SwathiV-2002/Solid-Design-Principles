import { CreditCardPayment, PayPalPayment } from './paymentMethod';
import { PaymentProcessor } from './paymentProcessor';

const paymentProcessor = new PaymentProcessor();

const creditCardPayment = new CreditCardPayment();
paymentProcessor.processPayment(creditCardPayment, 100);  // Credit card payment

const payPalPayment = new PayPalPayment();
paymentProcessor.processPayment(payPalPayment, 200); 


// paymentProcessor.ts (OCP Violation)

// class PaymentProcessor {
//     processPayment(method: string, amount: number): void {
//       if (method === "CreditCard") {
//         console.log(`Processing credit card payment of $${amount}`);
//       } else if (method === "PayPal") {
//         console.log(`Processing PayPal payment of $${amount}`);
//       } else {
//         console.log("Invalid payment method.");
//       }
//     }
//   }
  
//   const paymentProcessor = new PaymentProcessor();
//   paymentProcessor.processPayment("CreditCard", 100); // Credit card payment
//   paymentProcessor.processPayment("PayPal", 200);     // PayPal payment
  