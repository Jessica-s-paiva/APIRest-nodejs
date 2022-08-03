import express from "express";
import app from "../app.js";
import produtos from "./produtosRoutes.js";
import clientes from "./produtosRoutes.js";

const routes = (app) =>{
    app.route('/').get((req, res) =>{
        res.estatus(200).send({titulo: "Curso de Node"});
    })

    app.use(
        express.json(),
        produtos,
        clientes
    )
}

export default routes;