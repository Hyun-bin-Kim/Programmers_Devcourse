// import { Customer, Product } from "./types";

// const customer: Customer[] = [
//   {
//     id: "1",
//     name: "kim",
//     address: "Seoul",
//     email: "mings@naver.com",
//     description: "첫번째 고객님",
//   },
//   {
//     id: "2",
//     name: "park",
//     address: "Incheon",
//     email: "parks@naver.com",
//     description: "두번째 고객님",
//   },
//   {
//     id: "3",
//     name: "choi",
//     address: "Busan",
//     email: "choi@naver.com",
//     description: "세번째 고객님",
//   },
// ];

// const products: Product[] = [
//   {id: 1, name: "product1", description: "첫번째 상품", price: 10000},
//   {id: 2, name: "product2", description: "두번째 상품", price: 20000},
//   {id: 3, name: "product3", description: "세번째 상품", price: 30000},
// ]
// const databaseA = {
//   customer, products
// };

// export default databaseA;


//mongoDB
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const connectDB = async() => {
  try{
    await mongoose.connect(process.env.MONGODB_URL || '');
    console.log('MongoDB 연결 완료');
  }catch(error){
    console.error('MongoDB 연결 실패', error);
  }
}

export default connectDB;