import { Invoice } from './invoice';
import { InvoicePrinter } from './invoicePrinter';
import { InvoiceEmailSender } from './invoiceEmailSender';

const invoice = new Invoice("Swathi", 1000);

const invoicePrinter = new InvoicePrinter();
invoicePrinter.printInvoice(invoice.getInvoiceDetails());

const invoiceEmailSender = new InvoiceEmailSender();
invoiceEmailSender.sendInvoiceByEmail("swathi@ei.study", invoice.getInvoiceDetails());



// invoiceManager.ts (SRP Violation)

// class InvoiceManager {
//     createInvoice(customer: string, amount: number): void {
//       console.log(`Invoice created for ${customer} with amount ${amount}.`);
//     }
  
//     printInvoice(invoiceDetails: string): void {
//       console.log(`Printing Invoice: ${invoiceDetails}`);
//     }
  
//     sendInvoiceByEmail(email: string, invoiceDetails: string): void {
//       console.log(`Sending invoice to ${email}. Invoice details: ${invoiceDetails}`);
//     }
//   }
  
//   const invoiceManager = new InvoiceManager();
//   invoiceManager.createInvoice("Swathi", 1000);
//   invoiceManager.printInvoice("Swathi - Rs1000");
//   invoiceManager.sendInvoiceByEmail("swathi@gmail.com", "Swathi - $1000");
  