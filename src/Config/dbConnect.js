import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://produtos:123@produtos.jq8lsvj.mongodb.net/Loja-produtos');

let db = mongoose.connection;

export default db;