import express from "express";
import ProdutoController from "../Controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.getProdutos)
    .get("/produtos/:nome", ProdutoController.getProdutosId)
    .post("/produtos", ProdutoController.addProduto)
    .put("/produtos/:nome", ProdutoController.editProduto)

export default router;
