
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const getPool = require('../database/config/db');

const runMigrations = async () => {
    const db = await getPool();
    const connection = await db.getConnection();

    try {
        const migrationDir = path.join(__dirname, '../database/migrations');
        const files = fs.readdirSync(migrationDir).filter(file => file.endsWith('.sql'));

        for (const file of files) {
            const sql = fs.readFileSync(path.join(migrationDir, file), 'utf8');
            console.log(`Running migration: ${file}`);
            await connection.query(sql);
        }

        console.log(' Migrations completed successfully');
    } catch (error) {
        console.error(' Migration error:', error);
    } finally {
        connection.release();
        process.exit();
    }
};

runMigrations().catch((err) => {
    console.error(' Migration script failed:', err);
    process.exit(1);
});
