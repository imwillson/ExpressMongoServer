import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

// creates a contact collection, with the destructured contact schema
const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  
  //method
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  // contact is the callback, {} is a parameter we can use for specificity
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactWithID = (req, res) => {
  // contact/:contactId
  Contact.findById((req.params.contactId), (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact)
  })
}

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true}, (err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact)
  });
};

export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactId }, (err, contact) => {
    if (err) {
      res.send(err);
    }
      res.json({message: 'Response has done and the contact has been deleted!!!!!!!!!'})
  })
}

