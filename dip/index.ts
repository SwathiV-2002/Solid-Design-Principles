import { MySQLDatabase } from './mySQLDatabase';
import { PostgreSQLDatabase } from './postgreSQLDatabase';
import { App } from './app';

// Using MySQL
const mySQLApp = new App(new MySQLDatabase());
mySQLApp.run();  // Outputs: Connected to MySQL Database

// Using PostgreSQL
const postgreSQLApp = new App(new PostgreSQLDatabase());
postgreSQLApp.run();  // Outputs: Connected to PostgreSQL Database