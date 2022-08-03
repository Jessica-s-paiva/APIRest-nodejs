import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true},
        email: { type: String, required: true },
        cpf: { type: String, required: true },
        endereco: { type: String, required: true },
        genero: { type: String, required: true },
        dataNascimento: { type: String, required: true },
        celular: { type: String, required: true},
        dataInsercao: { type: String, required: true}
    }
);

const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;