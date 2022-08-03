import express from "express";
import ClienteController from "../Controllers/clientesController.js";

const router = express.Router();

router
    .get("/clientes", ProdutoController.getClientes)
    .get("/clientes/:nome", ProdutoController.getClientesId)
    .post("/clientes", ProdutoController.addClientes)
    .put("/clientes/:nome", ProdutoController.editCliente)

export default router;
