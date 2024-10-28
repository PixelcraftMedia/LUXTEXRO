/**
 * External dependencies
 */
 import { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 import Link from 'next/link';

 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useAuth } from '../login-function/hooks';
 
 export const LoginForm = () => {
     const [ username, setUsername ] = useState( '' );
     const [ password, setPassword ] = useState( '' );
     const { login, error, status } = useAuth();
 
     const onLogin = ( e ) => {
         e.preventDefault();
         login( username, password );
     };
  
     return (
       
         <form onSubmit={ onLogin } className="login-form px-3  bg-white p-6 " autoComplete="on">
            
             { error && (
                 <div className="error-notice bg-white rounded p-3 text-red-900">
                 {/*}    <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
             />*/}
                     <p className=''>{ error }</p>
                 </div>
             ) }
               <div>   <h2 className='text-xl mb-6'>Вхід</h2></div>
             <Field
                 label="Ім'я користувача або адреса електронної пошти"
                 value={ username }
                 autoComplete="ім'я користувача"
                 onChange={ ( value ) => setUsername( value ) }
                 disabled={ status === 'resolving' }
                 placeholder="Введить ім'я користувача "
             />
             <Field
           
                 label="Пароль"
                 type="password"
                 autoComplete="current-password"
                 value={ password }
                 onChange={ ( value ) => setPassword( value ) }
                 disabled={ status === 'resolving' }
                 placeholder="Введить пароль "
             />
             <p>
                 <button
                     className="button button--inline button--large p-3 bg-blue mt-4 text-white w-full rounded"
                     onClick={ onLogin }
                     disabled={ status === 'resolving' }
                 >
                     Увійти
                 </button>
             </p>
             <div className='flex'>
             <Link href="../../../registration/register-users"><div className='py-6 mr-6'>Реєстрація</div></Link>
            <Link href="../../../registration/reset"><div className='py-6'>Створити пароль?</div></Link>
             </div>
         </form>
         
     );
 };
 
 export default LoginForm;