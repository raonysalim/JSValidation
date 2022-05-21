import {useState} from 'react'
import styles from './app.module.css'

export default function(){

    const[formUsuario, setUsuario]=useState('')
    const[formSenha, setSenha]=useState('')
    const[formEmail, setEmail]=useState('')
  //  const usuarioReg= /(\d{1,5})(\u0021-\u002F|\u003A-\u0040|\u005B-\u0060)/;
    const usuarioReg=/ /
    const senhaRegUpperCase= /([A-Z].*){5}/g;
    const senhaRegSymbols=/(([\u0021-\u002C]|[\u002E-\u002F]|[\u003A-\u0040]|[\u005B-\u0060]).*){6}/g
    const senhaRegHiphens=/(\u002D).*(\u002D)/g
    const emailReg=/@gmail\.com{1}/
    const error='Errado'
    const certo='Ok'
    const testUsuario=!usuarioReg.test(formUsuario)&&formUsuario.length>=1
    const testSenha=senhaRegUpperCase.test(formSenha)&&senhaRegSymbols.test(formSenha)&&senhaRegHiphens.test(formSenha)
    const testEmail=emailReg.test(formEmail)
    
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
                    <p className={testUsuario?styles.displayNone:styles.display}>Não utilize espaços no usuario, qualquer caractere pode ser utilizado</p>
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
                    <p className={testSenha?styles.displayNone:styles.display}>A senha precisa ter no mínimo cinco letras maiusculas, 6 simbolos(ex:# @ *) e 2 dois hífens.</p>
                     </div>
                    <div className={styles.containerInput}>
                    <label htmlFor="e-mail">E-mail: </label>
                    <input type="text"
                     name="email"
                     id="e-mail"
                     placeholder='Digite seu usuario'
                     onChange={(e)=>{setEmail(e.target.value)}}
                     className={`${testEmail?styles.campoOk:styles.campoErrado} ${styles.marginEmail}`}
                    />
                    <p className={testEmail?styles.displayNone:styles.display}>Apenas os endereços do gmail serão validos</p>
                    </div>
                    
                </form> 
           </div>
        </div>
    )
}