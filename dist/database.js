"use strict";
// import { Customer, Product } from "./types";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URL || '');
        console.log('MongoDB 연결 완료');
    }
    catch (error) {
        console.error('MongoDB 연결 실패', error);
    }
};
exports.default = connectDB;
