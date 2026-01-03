import { defineConfig } from 'drizzle-kit';
import 'dotenv/config'; // Make sure your env variables are actually loaded

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL
	},
	verbose: true,
	strict: true
});