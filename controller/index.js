const getPool = require('../database/config/db');

const createBlog = async (req, res) => {
    const { title, meta_description, body, keywords } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const db = await getPool();
        const [result] = await db.execute(
            'INSERT INTO blogs (title, meta_description, body, keywords, image) VALUES (?, ?, ?, ?, ?)',
            [title, meta_description, body, keywords, image]
        );
        res.status(201).json({ id: result.insertId });
        console.log('Uploaded file:', req.file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const db = await getPool();
        const [blogs] = await db.execute('SELECT * FROM blogs ORDER BY created_at DESC');
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllBlogs,
    createBlog
};
