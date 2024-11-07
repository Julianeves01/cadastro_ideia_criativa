import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [
    {
        id: Math.floor(Math.random() * 1000000),
        titulo: "Matuê",
        categorias: 30,
        prioridade: "não",
        feedback: [ "cabelo preto", "pardo", "dread" ],
    },
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

usuarios.post("/", (req, res) => {
    const {
        id,
        titulo,
        categorias,
        prioridade,
        feedback
    }
};
export default usuariosRoutes;
