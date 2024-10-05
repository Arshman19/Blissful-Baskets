const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactForm', { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  query: String,
});

const visitUsSchema = new mongoose.Schema({
  name: String,
  contact: String,
  address: String,
});

const Contact = mongoose.model('Contact', contactSchema);
const VisitUs = mongoose.model('VisitUs', visitUsSchema);

app.post('/api/contact', async (req, res) => {
  const { email, query } = req.body;
  try {
    const newContact = new Contact({ email, query });
    await newContact.save();
    res.status(201).send('Contact saved');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post('/api/visit-us', async (req, res) => {
  const { name, contact, address } = req.body;
  try {
    const newVisit = new VisitUs({ name, contact, address });
    await newVisit.save();
    res.status(201).send('Visit Us details saved');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
