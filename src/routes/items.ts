import { Elysia } from 'elysia';
import {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem,
} from '../db';

export const itemsRoutes = new Elysia({ prefix: '/items' })
    .get('/', () => {
        const items = getAllItems();
        return items;
    })
    .get('/:id', ({ params: { id } }) => {
        const item = getItemById(Number(id));
        return item || { error: 'Item not found' };
    })
    .post('/', ({ body, set }) => {
        try {
            const { name, description } = body as { name: string; description: string };
            const newItem = addItem(name, description);
            return newItem;
        } catch (error) {
            set.status = 400; // ตั้งค่า HTTP status code เป็น 400 (Bad Request)
            return { error: error.message };
        }
    })
    .put('/:id', ({ params: { id }, body, set }) => {
        try {
            const { name, description } = body as { name: string; description: string };
            const updatedItem = updateItem(Number(id), name, description);
            return updatedItem;
        } catch (error) {
            set.status = 400; // ตั้งค่า HTTP status code เป็น 400 (Bad Request)
            return { error: error.message };
        }
    })
    .delete('/:id', ({ params: { id } }) => {
        const result = deleteItem(Number(id));
        return result;
    });