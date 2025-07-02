import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/lib/db/schemas/*',
  out: './drizzle',
  dbCredentials: {
    url: 'file:./db.sqlite',
  },
  casing: 'snake_case',
});
