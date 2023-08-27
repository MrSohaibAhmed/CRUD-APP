import express, { json } from 'express';
import { connect, Schema as _Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { Router } from 'express';
const app = express();

const PORT =  5000;

// Middleware
mongodb://localhost:27017
app.use(cors());  
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/TODO')
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:,',error));


const schema=new mongoose.Schema({
  task:String
})

const usermodel=mongoose.model("tasks", schema);

app.get('/',(req,res)=>{
  usermodel.find()
  .then((tasks)=>res.json(tasks))
  .catch((err)=>res.json(err))
})

app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id;
    usermodel.findById({_id:id})    
    .then(tasks=>res.json(tasks))
    .catch(err=>res.json(err))
})

app.put('/updateuser/:id',(req,res)=>{
  const id=req.params.id;
  usermodel.findByIdAndUpdate({_id:id},{task:req.body.task})
  .then(tasks=>res.json(tasks))
    .catch(err=>res.json(err))
})

app.post('/',(req,res)=>{
  usermodel.create(req.body)
  .then(tasks=>res.json(tasks))
  .catch(err=>res.json(err))
})

app.delete('/deleteuser/:id',(req,res)=>{
  const id=req.params.id;
  usermodel.findByIdAndDelete({_id:id})
  .then(tasks=>res.json(tasks))
  .catch(err=>res.json(err))
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
