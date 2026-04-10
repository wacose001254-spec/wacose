import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // <--- Make sure this line is exactly here!
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});