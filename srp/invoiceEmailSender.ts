export class InvoiceEmailSender {
    sendInvoiceByEmail(email: string, invoiceDetails: string): void {
      console.log(`Sending invoice to ${email}. Invoice details: ${invoiceDetails}`);
    }
  }