import clientes from "../Models/Cliente.js";

class ClienteController{
    
    static getClientes = (req, res) => {
        clientes.find((err, clientes) => { 
        res.status(200).json(clientes)
    });

    }

    static getClientesNome = (req, res) => {
        const nome = req.params.nome;
        clientes.findById(nome, (err, clientes) => { 
            if (err) {  
                res.status(400).send({message: `${err.message} - falha ao localizar cliente`})
            } else {
                res.status(200).send(clientes)
            }
    });

    }

    static addCliente = (req, res) => {
        const cliente =  new clientes(req.body);

        cliente.save((err) => {
            if (err) {  
                res.status(500).send({message: `${err.message} - falha ao cadastrar cliente`})
                } else {
                    res.status(201).send(cliente.toJSON())
                }
            })

    }

    static editCliente = (req, res) => {
        const nome = req.params.nome;

        clientes.findByIdAndUpdate(nome, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Cliente atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        })

    }

}

export default ClienteController;