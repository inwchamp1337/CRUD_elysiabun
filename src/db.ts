import { Database } from 'bun:sqlite';

// เชื่อมต่อกับฐานข้อมูล SQLite
const db = new Database('mydb.sqlite');

// สร้างตารางถ้ายังไม่มี
db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT
  );
`);

// ตรวจสอบข้อมูลซ้ำโดยใช้ name
export const checkDuplicateItem = (name: string) => {
    const query = db.query('SELECT * FROM items WHERE name = ?');
    const item = query.get(name);
    return item !== null; // ถ้ามีข้อมูลซ้ำจะคืนค่า true
};

// Query สำหรับดึงข้อมูลทั้งหมด
export const getAllItems = () => {
    const query = db.query('SELECT * FROM items');
    return query.all();
};

// Query สำหรับดึงข้อมูลโดย ID
export const getItemById = (id: number) => {
    const query = db.query('SELECT * FROM items WHERE id = ?');
    return query.get(id);
};

// Query สำหรับเพิ่มข้อมูลใหม่
export const addItem = (name: string, description: string) => {
    // ตรวจสอบข้อมูลซ้ำก่อนเพิ่ม
    if (checkDuplicateItem(name)) {
        throw new Error('Me leaw ja ! Item with this name already exists');
    }
    const query = db.query('INSERT INTO items (name, description) VALUES (?, ?)');
    const result = query.run(name, description);
    return { id: result.lastInsertRowid, name, description };
};

// Query สำหรับอัปเดตข้อมูล
export const updateItem = (id: number, name: string, description: string) => {
    // ตรวจสอบข้อมูลซ้ำก่อนอัปเดต
    const existingItem = getItemById(id);
    if (!existingItem) {
        throw new Error('Item not found');
    }
    if (existingItem.name !== name && checkDuplicateItem(name)) {
        throw new Error(' Item with this name already exists');
    }
    const query = db.query('UPDATE items SET name = ?, description = ? WHERE id = ?');
    const result = query.run(name, description, id);
    return { id, name, description };
};

// Query สำหรับลบข้อมูล
export const deleteItem = (id: number) => {
    const query = db.query('DELETE FROM items WHERE id = ?');
    const result = query.run(id);
    return { success: result.changes > 0 };
};