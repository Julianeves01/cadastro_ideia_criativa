import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [
    {
        id: Math.floor(Math.random() * 1000000),
        titulo: "Resenha Tom e Jerry",
        categorias: ["animação", "infantil"],
        prioridade: "baixa",
        feedback: "muito bom, adorei",
    },
    {
        "titulo": "flavinha topper",
        "categorias": ["animação", "moda", "musical"],
        "prioridade": "alta",
        "feedback": "o mais top do brasil"
    },
    {
        "titulo": "os devs",
        "categorias": ["terror", "acao", "suspense"],
        "prioridade": "baixa",
        "feedback": "muito complicado"
    }
]

usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message:
            usuarios.length == 0
            ? "Não há existencia de usuarios cadastrados!"
            : `Total de usuários: ${usuarios.length}`,
        usuarios,
    });
});



usuariosRoutes.post("/", (req, res) => {
    const {
        id,
        titulo,
        categorias,
        prioridade,
        feedback
    } = req.body;
    
    if(!titulo || !feedback) {
        return res.status(400).send({ message: "Insira um título e um feedback válido!" });
    }

    if(prioridade != "baixa" && prioridade != "média" && prioridade != "alta") {
        return res.status(400).send({ message: "classifique a prioridade como 'baixa' ou 'média' ou 'alta'!" });
    }

    if (!Array.isArray(categorias) || categorias.length < 2) {
        return res.status(400).send({ message: "O campo 'categorias' deve conter pelo menos duas categorias." });
    }
    
    res.send("feedback recebido com sucesso!");
});



export default usuariosRoutes;

