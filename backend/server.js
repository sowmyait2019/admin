// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors=require('cors')
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());  //it is require for get data from request body
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
//
// const connectToDB = async () => {
//     try {
//         await mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//
//         });
//         console.log("connected to MongoDb");
//
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//
//     }
// }
// connectToDB();
//
//
// const contactSchema = new mongoose.Schema({
//   Date: String,
//   Name: String,
//   EmailId: String,
//   services:String,
//   Phno:Number
//     // Add other fields as needed
//   });
//
//
//   const ContactModel = mongoose.model('Contact', contactSchema,'contacts');
//
//   app.get('/api/data', async (req, res) => {
//     try {
//       const data = await ContactModel.find();
//       res.json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//
// const orderSchema = new mongoose.Schema({
//   order: Number,
//   orderdetails: String,
//   payment: String
//   // services:String,
//   // Phno:Number
//   // Add other fields as needed
// });
//
// const OrderModel = mongoose.model('Order', orderSchema,'orders');
//
//   app.get('/api/data', async (req, res) => {
//     try {
//     const data = await OrderModel.find();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
//
//
//
//
// const port = 5000;
// app.listen(port, () => {
//     console.log("server is started successfully");
// });
//
//


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json()); // it is require for get data from request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to MongoDb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
connectToDB();

const contactSchema = new mongoose.Schema({
  Name: String,
  MobileNumber: Number,
  EmailAddress: String,

  // Add other fields as needed
});


const ContactModel = mongoose.model('Contact', contactSchema, 'contacts');

app.get('/api/contacts', async (req, res) => {
  try {
    const data = await ContactModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const orderSchema = new mongoose.Schema({
  order: String,
  orderdetails: String,
  payment: String
  // services:String,
  // Phno:Number
  // Add other fields as needed
});

const OrderModel = mongoose.model('Order', orderSchema, 'orders');

app.get('/api/orders', async (req, res) => {
  try {
    const data = await OrderModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const bookSchema = new mongoose.Schema({
  name: String,
  phonenumber: Number,
  email: String,
  persons:Number,
  date:String
  // Add other fields as needed
});

const BookModel = mongoose.model('Book', bookSchema, 'books');

app.get('/api/books', async (req, res) => {
  try {
    const data = await BookModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("server is started successfully");
});

