import styles from './Register.module.css';

const Register = () => {
  return (
    <div>
        
        <h1>Cadastre-se</h1>
        <p>Use seu usuario para compartilhar suas histórias!</p>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name='displayName' required placeholder='Nome do Usuário'/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name='email' required placeholder='Email do Usuário'/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name='password' required placeholder='Insira sua Senha'/>
            </label>
            <label>
                <span>Confirme sua Senha:</span>
                <input type="password" name='confirmPassword' required placeholder='Confirme sua Senha'/>
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register