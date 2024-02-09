const express = require('express');
const router = express.Router();

const { getBooks, viewBook, addBook, updateBook, deleteBook } = require('../controllers/books');

// Define routes for books
router.get('/', getBooks);
router.post('/', addBook);
router.get('/:id', viewBook)
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;