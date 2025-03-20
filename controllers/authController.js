const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Inscription
exports.register = async (req, res) => {
try {
const { name, email, password } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);
const user = new User({ name, email, password: hashedPassword });
await user.save();
res.status(201).json({ message: "Utilisateur créé avec succès" });
} catch (error) {
res.status(500).json({ error: error.message });
}
};

// Connexion
exports.login = async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: "Identifiants incorrects" });

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ message: "Identifiants incorrects" });

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
res.json({ token });
} catch (error) {
res.status(500).json({ error: error.message });
}
};