CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"pickup" text NOT NULL,
	"destination" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
