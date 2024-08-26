import express, { NextFunction, Request, Response, Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Customer, Product } from "./types";
import databaseA from "./database";
import CustomerModel from "./models/customer"
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './database'
import jwt, { VerifyErrors } from "jsonwebtoken";

connectDB();
const sec: string = process.env.TOKEN_SECRET as string
const generateAccessToken = (username: any) => {
  return jwt.sign({username}, sec, {expiresIn: '600s'})
}

// require('dotenv').config();
const app = express();
const PORT = 5050;
const router = Router();
app.use(bodyParser.json());
// app.use(cors());
const corsOptions = {
  origin : "*",
  credential : true,
}

//auth
router.post('/api/v1/auth', (req, res) => {
  const token = generateAccessToken({username: req.body.username})
  res.json(token);
})
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null){
    return res.status(401);
  }
  jwt.verify(token, sec, (err: VerifyErrors | null, decoded: any) => {
    if(err){
      return res.status(403).json({msg: 'Forbidden', error: err.message})
    }
    (req as any) = decoded;
  })
  next();
}

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World");
});
//mongoose connect
// mongoose.connect(process.env.MONGODB_URL || '')
// .then(() => console.log('mongodb 연결 완료'))
// .catch(err => {
//   console.error('mongodb 연결 실패', err)
// })


// const ranId = () => {
//   return Math.floor(Math.random()*1000);
// }
router.get("/api/v1/customers", authenticateToken, async(req, res) => {
  // res.send(databaseA.customer);
  try{
    const customers = await CustomerModel.find();
    res.json(customers);
  }catch(error){
    console.error('고객 정보 조회 실패', error)
    res.status(500).json({error: '고객 정보 조회 중 오류가 발생하였습니다.'})
  }
});

router.get("/api/v1/customers/:id", async (req,res) => {
  // const customer = databaseA.customer.find(
  //   (customer) => customer.id === req.params.id
  // );
  // if(typeof customer === "undefined"){
  //   res.sendStatus(404);
  // }else {
  //   res.send(customer)
  // }
  try{
    const customer = await CustomerModel.findOne({id: req.params.id});
    if(!customer){
      return res.sendStatus(404);
    }
    res.json(customer);
  }catch(error){
    console.error('고객 정보 조회 실패', error)
    res.status(500).json({error: '고객 정보 조회 중 오류가 발생하였습니다.'})
  }
});

router.post("/api/v1/customers", async (req, res) => {
  // const customer: Customer = req.body;
  // databaseA.customer.push({
  //   id: uuidv4(),
  //   name: customer.name,
  //   address: customer.address,
  //   email: customer.email,
  // });
  // res.sendStatus(200);
  const customer: Omit<Customer, 'id'> = req.body;
  const newCustomer = new CustomerModel({
    id: uuidv4(),
    name: customer.name,
    address: customer.address,
    email: customer.email,
  })
  try{
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  }catch(error){
    console.error('고객 정보 저장 실패', error)
    res.status(500).json({error: '고객 정보 저장 중 오류 발생하였습니다.'})
  }
})

router.put("/api/v1/customers/:id", async (req,res) => {
  // const index = databaseA.customer.findIndex(
  //   (customer) => customer.id === req.params.id
  // )
  // if(index != -1) {
  //   const input = req.body;
  //   const prev = databaseA.customer[index]
  //   const customer = {
  //     id: prev.id,
  //     name: input.name,
  //     address: input.address,
  //     email: input.email,
  //   };
  //   databaseA.customer[index] = customer;
  //   res.sendStatus(200);
  // }else{
  //   res.sendStatus(404);
  // }
  try{
    const customer = await CustomerModel.findOneAndUpdate({id : req.params.id}, req.body, {new:true});
    if(!customer){
      return res.sendStatus(404);
    }
    res.json(customer);
  }catch(error){
    console.error('고객 정보 수정 실패', error)
    res.status(500).json({error: '고객 정보 수정 중 오류 발생하였습니다.'})
  }
})

router.delete("/api/v1/customers/:id", async (req,res) => {
  // databaseA.customer = databaseA.customer.filter(
  //   (customer) => customer.id != req.params.id
  // );
  // res.sendStatus(200);
  try{
    const result = await CustomerModel.findOneAndDelete({id: req.params.id})
    if(!result){
      return res.sendStatus(404);
    }
    res.status(200).json({msg: '고객 정보 삭제 완료'})
  }catch(error){
    console.error('고객 정보 삭제 실패', error)
    res.status(500).json({error: '고객 정보 삭제 중 오류 발생하였습니다.'})
  }
})

app.use(router);
app.listen({ port: PORT }, () => {
  console.log(`localhost:${PORT} 에서 실행`);
});
