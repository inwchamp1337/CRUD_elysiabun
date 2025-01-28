import { Elysia } from 'elysia';
import cors from '@elysiajs/cors';
import { itemsRoutes } from './routes/items';

const app = new Elysia()
    .use(cors()) //
    .use(itemsRoutes) // 
    .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);