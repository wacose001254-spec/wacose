import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// This creates a table named 'orders' in your database
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),         // A unique number for every order (1, 2, 3...)
  pickup: text('pickup').notNull(),      // The starting point
  destination: text('destination').notNull(), // The drop-off point
  createdAt: timestamp('created_at').defaultNow(), // Automatically records the time
});