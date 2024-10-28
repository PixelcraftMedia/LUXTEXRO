/**
 * External dependencies
 */
 import React, { useState, useEffect } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 import Link from 'next/link';
 import PasswordStrengthBar from 'react-password-strength-bar';
 import Success from './success';
 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useResetPassword } from '../login-function/use-reset-password';

 
 export const ResetPasswordForm = ( props ) => {
    const { reset } = props;
   
  const [ resetKey, setKey ] = useState( '' );
    const [ resetLogin, setLogin ] = useState( '' );
 
          useEffect(() => {
            // Обновляем название докуммента, используя API браузера
            document.title = resetKey;
            document.titl =resetLogin;
          });
     const [ password, setPassword ] = useState( '' );
     const [ password2, setPassword2 ] = useState( '' );
     const [ passwordError, setPasswordError ] = useState( '' );
     const { resetUserPassword, error, status } = useResetPassword();
 
     const onReset = ( e) => {
         e.preventDefault();
         setPasswordError( '' );
         if ( password.length === 0 ) {
             setPasswordError( 'Ви повинні ввести новий пароль.' );
             return;
         }
         if ( password2.length === 0 ) {
             setPasswordError( 'Ви повинні повторно ввести свій новий пароль.' );
             return;
         }
         if ( password !== password2 ) {
             setPasswordError( 'Паролі не співпадають!' );
             return;
         }
         resetUserPassword( resetKey, resetLogin, password );
     };
 
     if ( status === 'resolved' && ! error ) {
         return (
            <Success> 
                 <p>
                     
                        Ваш пароль створено. Ви можете { ' ' }
                     <Link href="/registration/register" className="link-button ">
                       <div className="link-button bg-white text-black block p-3" >  Ввійти</div>
                     </Link>
                     .
                 </p>
                 </Success> 
         );
     }
 
     return (
         <form onSubmit={ onReset } className="reset-form bg-white p-6 ">
             { ( error || passwordError ) && (
                 <div className="error-notice">
                {/*    <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                />*/}
                     <p>{ passwordError || error }</p>
                 </div>
             ) }
                <div>   <h2 className='text-xl mb-6'>Створити пароль</h2></div>
             <Field
                 label="Новий пароль"
                 type="password"
                 value={ password }
                 onChange={ setPassword }
             />
             <PasswordStrengthBar
             className='text-white'
                 password={ password }
                 scoreWords={ [
                     'critical fail',
                     'okay',
                     'good',
                     'strong',
                     'critical roll!',
                 ] }
                 shortScoreWord={ 'critical fail' }
             />
             <Field
                 label="Повторно введіть новий пароль"
                 type="password"
                 value={ password2 }
                 onChange={ setPassword2 }
             />
             <button
                 className="button button--inline button--large p-3 bg-blue mt-4 text-white w-full rounded"
                 onClick={() => {setKey(reset[0]);setLogin(reset[1]);onReset;}}
                 disabled={ status === 'resolving' }
             >
                 Встановити новий пароль
             </button>
           
             <div>
       
      </div>
         </form>
     );
 };
 
 export default ResetPasswordForm;