import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        cor: { type: String, required: true },
        marca: { type: String, required: true },
        peso: { type: String, required: true },
        tamanho: { type: String, required: true },
        valor: { type: String, required: true },
        descricao: { type: String, required: true }
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;