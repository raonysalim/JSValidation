import {useState} from 'react'

export default function(){

    const[formUsuario, setUsuario]=useState('')
    const[formSenha, setSenha]=useState('')
    const[formEmail, setEmail]=useState('')

    
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
                    />
                    <label htmlFor="senha">Senha: </label>
                    <input type="text"
                     name="senha"
                    id="senha"
                    placeholder='Digite seu usuario'
                    onChange={(e)=>{setSenha(e.target.value)}}
                     />
                    <label htmlFor="e-mail">E-mail: </label>
                    <input type="text"
                     name="email"
                     id="e-mail"
                     placeholder='Digite seu usuario'
                     onChange={(e)=>{setEmail(e.target.value)}}
                      />
                </form> 
                {console.log(formUsuario)}
                {console.log(formSenha)}
                {console.log(formEmail)}
           </div>
        </div>
    )
}