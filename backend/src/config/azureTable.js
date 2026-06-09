import dotenv from "dotenv";
import { TableClient } from "@azure/data-tables";

dotenv.config();

const connectionString =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const tableName =
  process.env.AZURE_TABLE_NAME || "whatsnew";

export const tableClient =
  TableClient.fromConnectionString(
    connectionString,
    tableName
  );

export async function initializeTable() {
  try {
    await tableClient.createTable();
    console.log("Table created");
  } catch (error) {
    if (error.statusCode !== 409) {
      console.error(error);
    }
  }
}

await initializeTable();