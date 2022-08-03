import express from "express";
import cors from "cors";
import db from "./Config/dbConnect.js";
import produtos from "./Models/Produto.js";
import routes from  './Routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
});

const app = express();

app.use(express.json());
app.use(cors());

routes(app);

// app.get('/produtos/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     res.json(livros[index]);
//   })


// app.put('/produtos/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })

app.delete('/produtos/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app