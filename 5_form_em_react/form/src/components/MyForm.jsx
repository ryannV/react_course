import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
    // 3 - Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
       setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando Formulário!");
        console.log(name, email, bio, role);

        // 7 - Limpando Form
        setName("");
        setEmail("");
        setBio("");
    }

    return(
        <div>
            {/* 1 - Criação do Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
                </div>

                {/* 2 - Label envolvendo Input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do Usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                
                <label>
                    <span>Função no Sistema:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

// Informações: onChange, é acionado uma vez que é teclado no INPUT

// 6 - Controlled Input
// Colocar 'value={variavel} nos inputs, e o components recebe uma props que é inicializada no useState, serve para editar campos'
export default MyForm