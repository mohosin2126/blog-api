const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createBlog} = require('../controller');

router.post('/blogs', upload.single('image'), createBlog);

module.exports = router;
