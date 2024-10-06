# SOLID Design Principles in TypeScript

This project demonstrates the **SOLID Design Principles** using TypeScript. Each principle is illustrated through simple, practical examples in separate files, showing how to structure code for maintainability, scalability, and flexibility.

## SOLID Principles Overview

SOLID is a set of five design principles that help developers write clean, modular, and scalable code in object-oriented programming (OOP). SOLID stands for:
1. **Single Responsibility Principle (SRP)**
2. **Open/Closed Principle (OCP)**
3. **Liskov Substitution Principle (LSP)**
4. **Interface Segregation Principle (ISP)**
5. **Dependency Inversion Principle (DIP)**

---

## 1. Single Responsibility Principle (SRP)

**Definition**: A class should have only one reason to change, meaning it should have only one responsibility.

### Example:
We split responsibilities between two classes:
- `ReportGenerator`: Responsible for generating reports.
- `EmailSender`: Responsible for sending emails.

This ensures that each class handles a single concern.

**Relevant Files**:
- `reportGenerator.ts`
- `emailSender.ts`

---

## 2. Open/Closed Principle (OCP)

**Definition**: Software entities should be open for extension but closed for modification. This means you should be able to extend a class's behavior without modifying its existing code.

### Example:
We demonstrate this principle by using interfaces to define payment methods. New payment methods (like CreditCard, PayPal) can be added without modifying the `PaymentProcessor` class.

**Relevant Files**:
- `paymentMethod.ts`
- `paymentProcessor.ts`

---

## 3. Liskov Substitution Principle (LSP)

**Definition**: Subtypes must be substitutable for their base types without affecting the correctness of the program.

### Example:
We demonstrate LSP using birds and penguins. A `Penguin` class should not inherit from a `Bird` class if it cannot perform the same actions (like flying). Instead, we introduce an abstract `Bird` class and separate behavior for flying birds.

**Relevant Files**:
- `bird.ts`
- `penguin.ts`

---

## 4. Interface Segregation Principle (ISP)

**Definition**: No client should be forced to depend on methods it does not use. Interfaces should be split into smaller, more specific interfaces so that classes only need to implement the methods that are relevant to them.

### Example:
We demonstrate ISP with shipping services. We split a large `ShippingService` interface into smaller interfaces (`Deliverable`, `Trackable`, `Expeditable`) so that each shipping class implements only what it needs.

**Relevant Files**:
- `shippingInterfaces.ts`
- `shippingServices.ts`

---

## 5. Dependency Inversion Principle (DIP)

**Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces or abstract classes).

### Example:
We demonstrate DIP by abstracting the connection to databases using a `Database` interface. High-level modules (like an `App`) depend on the `Database` interface rather than concrete implementations like `MySQL` or `PostgreSQL`.

**Relevant Files**:
- `database.ts`
- `app.ts`
- `mysqlDatabase.ts`
- `postgresDatabase.ts`

---

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SwathiV-2002/Solid-Design-Principles.git
   cd Solid-Design-Principles
