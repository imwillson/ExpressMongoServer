import express from 'express';
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useMongoClient: true
})

//body Parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// pass in the express app as a paramter! 
routes(app);

// static files
app.use(express.static('public'));

app.get('/', (req,res) =>
  res.send(`Node and express server is running on Port ${PORT}`)
);

app.listen(PORT, () => 
  console.log(`your server is running on port ${PORT}`)
);