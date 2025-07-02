import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schemas';

export const db = drizzle({
  connection: 'file:./db.sqlite',
  schema,
  casing: 'snake_case',
});
