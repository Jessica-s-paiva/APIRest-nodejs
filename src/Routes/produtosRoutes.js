import express from "express";
import ProdutoController from "../Controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.getProdutos)
    .post("/produtos", ProdutoController.addProduto)
    .put("/produtos/:id", ProdutoController.editProduto)
export default router;
