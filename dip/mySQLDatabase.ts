import { Database } from './database';

class MySQLDatabase implements Database {
  connect(): void {
    console.log("Connected to MySQL Database.");
  }
}

export { MySQLDatabase };
