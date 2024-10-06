import { Database } from './database';

class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("Connected to PostgreSQL Database.");
  }
}

export { PostgreSQLDatabase };
