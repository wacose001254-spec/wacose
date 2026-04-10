import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// This pulls your secret link from the .env file
const sql = neon(process.env.DATABASE_URL!);

// This exports the "db" object so your actions.ts can use it
export const db = drizzle(sql);