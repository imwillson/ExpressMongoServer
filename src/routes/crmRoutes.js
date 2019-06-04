import { runInNewContext } from "vm";
import { 
  addNewContact, 
  getContacts, 
  getContactWithID, 
  updateContact, 
  deleteContact
} from '../controllers/crmController'


const routes = (app) => {
  app.route('/contact')
  .get((req,res, next) => {
    //middleware{
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
  }, getContacts)
  
  // (req,res, next) => {
    // res.send('GET Request SUCCESSFUL');
  // })
  
  //from the import 
  //POST endpoint
  .post(addNewContact);

  // contactId Route
  app.route('/contact/:contactId')
  // get specifc contact with :contactiD
  .get(getContactWithID)
  
  //put request
  .put(updateContact)
    
  // (req,res) => 
  // res.send('PUT Request sucessful'))

  // delete request
  // .delete((req,res) => 
  // res.send('DELETE REQUEST SUCCESSFUL'));
  .delete(deleteContact)

  
}

export default routes;