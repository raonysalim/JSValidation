import {useState} from 'react'
import styles from './app.module.css'

export default function(){

    const[formUsuario, setUsuario]=useState('')
    const[formSenha, setSenha]=useState('')
    const[formEmail, setEmail]=useState('')
  //  const usuarioReg= /(\d{1,5})(\u0021-\u002F|\u003A-\u0040|\u005B-\u0060)/;
    const senhaReg= /([A-Z]{5})([\u0021-\u002C]|[\u002E-\u002F]|[\u003A-\u0040]|[\u005B-\u0060]){6}(\u002D{2})/g;
    const usuarioReg=/[\b]/
    const emailReg=/@gmail\.com/
    
    return (
        <div>
            <div><h1>JSValidation</h1></div>
           <div>
                <form>
                    <label htmlFor="usuario">Usuario: </label>
                    <input type="text" 
                    name='usuario' 
                    id='usuario'
                    placeholder='Digite seu usuario'
                    onChange={(e)=>{setUsuario(e.target.value)}}
                    className={formUsuario?styles.campoOk:styles.campoErrado}
                    />
                    <label htmlFor="senha">Senha: </label>
                    <input type="text"
                     name="senha"
                    id="senha"
                    placeholder='Digite seu usuario'
                    onChange={(e)=>{setSenha(e.target.value)}}
                    className={formSenha?styles.campoOk:styles.campoErrado}
                     />
                    <label htmlFor="e-mail">E-mail: </label>
                    <input type="text"
                     name="email"
                     id="e-mail"
                     placeholder='Digite seu usuario'
                     onChange={(e)=>{setEmail(e.target.value)}}
                     className={formEmail?styles.campoOk:styles.campoErrado}
                    />
                </form> 
           </div>
           {console.log(usuarioReg.test(formUsuario))}
           <p>seguinte irmão{formUsuario}</p>

        </div>
    )
}