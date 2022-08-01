import produtos from "../Models/Produto.js";

class ProdutoController{
    
    static getProdutos = (req, res) => {
        produtos.find((err, produtos) => { 
        res.status(200).json(produtos)
    });

    }

    static addProduto = (req, res) => {
        const produto =  new produtos(req.body);

        produto.save((err) => {
            if (err) {  
                res.status(500).send({message: `${err.message} - falha ao cadastrar produto`})
                } else {
                    res.status(201).send(produto.toJSON())
                }
            })

    }

    static editProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Produto atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        })

    }

}

export default ProdutoController;