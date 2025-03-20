const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

// Créer un livre
exports.createBook = async (req, res) => {
 try {
 let { title, authorId, authorName, publishedYear, genre } = req.body;
 
 let author;
 if (authorId) {
 author = await Author.findById(authorId);
 if (!author) return res.status(400).json({ message: "Auteur introuvable" });
 } else if (authorName) {
 author = await Author.findOne({ name: authorName });
 if (!author) {
 author = new Author({ name: authorName });
 await author.save();
 }
 } else {
 return res.status(400).json({ message: "Fournissez un ID ou un nom d'auteur" });
 }

 const book = new Book({ title, author: author._id, publishedYear, genre });
 await book.save();

 res.status(201).json(book);
 } catch (error) {
 res.status(500).json({ error: error.message });
 }
};

// Lire tous les livres
exports.getBooks = async (req, res) => {
 try {
 const books = await Book.find().populate('author', 'name');
 res.json(books);
 } catch (error) {
 res.status(500).json({ error: error.message });
 }
};

// Lire un livre par ID
exports.getBookById = async (req, res) => {
 try {
 const book = await Book.findById(req.params.id).populate('author', 'name');
 if (!book) return res.status(404).json({ message: "Livre non trouvé" });
 res.json(book);
 } catch (error) {
 res.status(500).json({ error: error.message });
 }
};

// Mettre à jour un livre
exports.updateBook = async (req, res) => {
 try {
 const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('author', 'name');
 if (!book) return res.status(404).json({ message: "Livre non trouvé" });
 res.json(book);
 } catch (error) {
 res.status(500).json({ error: error.message });
 }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
 try {
 const book = await Book.findByIdAndDelete(req.params.id);
 if (!book) return res.status(404).json({ message: "Livre non trouvé" });
 res.json({ message: "Livre supprimé avec succès" });
 } catch (error) {
 res.status(500).json({ error: error.message });
 }
};