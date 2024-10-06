export class Invoice {
    private customer: string;
    private amount: number;
  
    constructor(customer: string, amount: number) {
      this.customer = customer;
      this.amount = amount;
    }
  
    getInvoiceDetails(): string {
      return `${this.customer} - Rs${this.amount}`;
    }
  }