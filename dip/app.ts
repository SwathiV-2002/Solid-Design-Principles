import { Database } from './database';

class App {
  private database: Database;

  constructor(database: Database) {
    this.database = database;  // Dependency on abstraction
  }

  run(): void {
    this.database.connect();
  }
}

export { App };
