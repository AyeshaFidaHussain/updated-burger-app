import React from 'react';
import './login.css';
import {Button} from '../Button/button';
import { Grid } from '@mui/material';
function Login()
{
  return(
    <div className='my-form' >
      <form >
        <input type="email" placeholder="example123@gmail.com" name="email"    maxlength="30" required />
        <input type="password" placeholder="Enter password"    name="password" maxlength="15" required/>
        <Button buttonVal="Submit" className="sign-up"/>
      </form>
    </div>
  );
}
export {Login}