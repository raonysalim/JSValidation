import {useState} from 'react'
import styles from './app.module.css'

export default function(){

    const[formUsuario, setUsuario]=useState('')
    const[formSenha, setSenha]=useState('')
    const[formEmail, setEmail]=useState('')
  //  const usuarioReg= /(\d{1,5})(\u0021-\u002F|\u003A-\u0040|\u005B-\u0060)/;
    const senhaReg= /([A-Z]{5})([\u0021-\u002C]|[\u002E-\u002F]|[\u003A-\u0040]|[\u005B-\u0060]){6}(\u002D{2})/g;
    const usuarioReg=/ /
    const emailReg=/@gmail\.com/
    const error='Errado'
    const certo='Ok'
    const testUsuario=!usuarioReg.test(formUsuario)&&formUsuario.length>=1
    const testSenha=senhaReg.test(formSenha)
    
    return (
        <div>
            <div className={styles.titleContainer}>
                <h1 className={styles.titleText}>JSValidation</h1>
            </div>
           <div className={styles.containerForm}>
                <form>
                    <div className={styles.containerInput}>
                    <label htmlFor="usuario">Usuario: </label>
                    <input type="text" 
                    name='usuario' 
                    id='usuario'
                    placeholder='Digite seu usuario'
                    onChange={(e)=>{setUsuario(e.target.value)}}
                    className={testUsuario?styles.campoOk:styles.campoErrado}
                    />
                    <p className={testUsuario?styles.displayNone:styles.display}>Não utilize espaços no usuario, não existe limite de caracteres, qualquer caractere pode ser utilizado</p>
                    </div>
                    <div className={styles.containerInput}>
                    <label htmlFor="senha">Senha: </label>
                    <input type="text"
                     name="senha"
                    id="senha"
                    placeholder='Digite seu usuario'
                    onChange={(e)=>{setSenha(e.target.value)}}
                    className={`${testSenha?styles.campoOk:styles.campoErrado} ${styles.marginSenha}`}
                     />
                    <p className={testSenha?styles.displayNone:styles.display}>A senha precisa de cinco letras maiusculas, 6 simbolos(ex:# @ *) e 2 dois hífens.</p>
                     </div>
                    <div className={styles.containerInput}>
                    <label htmlFor="e-mail">E-mail: </label>
                    <input type="text"
                     name="email"
                     id="e-mail"
                     placeholder='Digite seu usuario'
                     onChange={(e)=>{setEmail(e.target.value)}}
                     className={`${emailReg.test(formEmail)?styles.campoOk:styles.campoErrado} ${styles.marginEmail}`}
                    />
                    </div>
                    
                </form> 
           </div>
           {console.log(senhaReg.test(formSenha))}
           <p>seguinte irmão{formUsuario}</p>

        </div>
    )
}