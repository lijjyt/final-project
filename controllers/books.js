// Import any necessary models or modules
const { StatusCodes } = require('http-status-codes')
const Book = require('../models/book');

// Controller functions
const getBooks = async (req, res) => {
    const books = await Book.find({ createdBy:req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ books })
};

const viewBook = (req, res) => {
    // Implement logic to retrieve details of a specific book
    const bookId = req.params.id;
    // Fetch the book details using the bookId
    res.send(`View details of book with ID ${bookId}`);
};

const addBook = (req, res) => {
    // Implement logic to add a new book
    res.send('Add a new book');
};

const updateBook = (req, res) => {
    // Implement logic to update a book
    res.send(`Update book with ID ${req.params.id}`);
};

const deleteBook = (req, res) => {
    // Implement logic to delete a book
    res.send(`Delete book with ID ${req.params.id}`);
};

module.exports = {
    getBooks,
    viewBook,
    addBook,
    updateBook,
    deleteBook,
};
