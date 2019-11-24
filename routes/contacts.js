// In this file we will perform CRUD operations

const express = require('express'); // we we importing [express] sothat we can use [router]
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  // remember one thing that here '/' meand '/api/contacts' already present in the URL because
  // we have defined in [server.js] file
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add Contacts');
});

// @route   PUT api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete Contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router; // that means we can access all these routers from any file like we are access from [server.js] file
