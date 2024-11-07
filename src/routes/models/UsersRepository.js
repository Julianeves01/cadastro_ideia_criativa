import User from "./User.js";
class UsersRepository {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }


    addUser(titulo, categorias, prioridade, feedback) {
       if(!titulo || !Array.isArray(categorias) || categorias.length < 2 || !feedback) {
        throw new Error("Título, pelo menos duas categorias, e prioridade são obrigatórios.");
        }

        const newUser = new User(titulo, categorias, prioridade);
        newUser.feedback = feedback;

        this.users.push(newUser);

        return newUser;
    }


    getUserById(id) {
        return this.users.find((u) => u.id === id) || null;
    }



    updateUser(id, titulo, categorias, prioridade, feedback) {
        const user = this.users.find((u) => u.id === id);

        if(!user){
            return null;
        }

        if(!titulo || !Array.isArray(categorias) || categorias.length < 2 || !feedback) {
            throw new Error("Título, pelo menos duas categorias, e prioridade são obrigatórios.");
        }

        user.titulo = titulo;
        user.categorias = categorias;
        user.prioridade = prioridade;
        user.feedback = feedback;

        if(feedback){
            user.feedback=feedback;
        }

        return user;
    }

    deleteUser(id) {
        const userIndex = this.users.findIndex((u) => u.id === id);

        if(!userIndex === -1){
            return null;
        }

        const deletedUser = this.users.splice(userIndex, 1)[0];
        return deletedUser;
         }
    }
       

export default UsersRepository;