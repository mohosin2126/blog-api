const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createBlog, getAllBlogs } = require('../controller');

router.post('/blogs', upload.single('image'), createBlog);
router.get('/blogs', getAllBlogs);

module.exports = router;
