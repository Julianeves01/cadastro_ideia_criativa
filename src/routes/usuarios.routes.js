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
        id: Math.floor(Math.random() * 1000000),
        "titulo": "flavinha topper",
        "categorias": ["animação", "moda", "musical"],
        "prioridade": "alta",
        "feedback": "o mais top do brasil"
    },
    {
        id: Math.floor(Math.random() * 1000000),
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
        titulo,
        categorias,
        prioridade,
        feedback
    } = req.body;
    
    if (!titulo || !feedback) {
        return res.status(404).json({
            message: "Insira um título ou um feedback válido!",
        });
    }

    if(prioridade != "baixa" && prioridade != "média" && prioridade != "alta") {
        return res.status(400).send({ message: "Classifique a prioridade como 'baixa' ou 'média' ou 'alta'!" });
    }

    if (!Array.isArray(categorias) || categorias.length < 2) {
        return res.status(400).send({ message: "O campo 'categorias' deve conter pelo menos duas categorias." });
    }
    
    res.send("feedback recebido com sucesso!");
});

usuariosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, categorias, prioridade, feedback } = req.body;

    const usuario = usuarios.find((u) => u.id == id);

    if (!usuario) {
        return res.status(404).json({
            message: "Usuário não encontrado!",
        });
    }
    
    if (!titulo || !feedback) {
        return res.status(404).json({
            message: "Insira um título ou um feedback válido!",
        });
    }

    if(prioridade != "baixa" && prioridade != "média" && prioridade != "alta") {
        return res.status(400).send({ message: "Classifique a prioridade como 'baixa' ou 'média' ou 'alta'!" });
    }

    if (!Array.isArray(categorias) || categorias.length < 2) {
        return res.status(400).send({ message: "O campo 'categorias' deve conter pelo menos duas categorias." });
    }

    return res.status(200).json({
        message: `Usuário com id ${id} foi atualizado!`,
        usuarios,
    });
});

export default usuariosRoutes;

