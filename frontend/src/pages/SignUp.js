import React, { useState } from 'react';
// import Switch from 'react-switch';
import '../App.css';
import styled from "styled-components";
import Modal from '../components/Modal';


function SignUp()
{
    var displayname, phonenumber, email, password, confirm_password;
    const api_path = 'https://kindling-lp.herokuapp.com/';
    const [message,setMessage] = useState('');

    const [checked, setChecked] = useState(false);
    const toIndividual = nextChecked => {
        setChecked(nextChecked);
    }

    const [isOpen, setOpen] = useState(false);

    const doSignup = async event =>
    {
        if (password.value !== confirm_password.value)
        {
            setMessage('* Passwords do not match!');
        }
        else
        {
            event.preventDefault();

            var obj = {email_str:email.value, password_str:password.value, dispaly_name_str:displayname.value,
                        phone_str:phonenumber.value,is_group_bool:checked};
            var js = JSON.stringify(obj);
            
            try
            {    
                const response = await fetch(api_path + 'api/register',
                    {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

                var res = JSON.parse(await response.text());
                
                if( res['success_bool'] === false )
                {
                    window.location.href = '/login';
                }
                else
                {
                    window.location.href = '/emailverification';
                }
            }
            catch(e)
            {
                alert(e.toString());
                return;
            } 
        }
    }

    return(
        
        <div id='signup1_container'>
            
            <img class='fire' id='small_icon' src='/kindling-icon.png'></img><br/>
            <h1 className='top_title'>Kindling</h1><br/>

            <div>
            <form class="signup-box">
                <h1>Basic Information</h1>
                <input type="text" id="singup_displayname" placeholder='displayname' ref={(c) => displayname = c}></input>
                <input type="tel" id="singup_phonenumber" placeholder='phonenumber' ref={(c) => phonenumber = c}></input>
                <input type="email" id="singup_email" placeholder='email' ref={(c) => email = c}></input>
                <input type="password" id="signup_password" placeholder='password' ref={(c) => password = c}></input>
                <input type="password" id="confirm_password" placeholder='confirm password' ref={(c) => confirm_password = c}></input>
                <button type="button"  id='login_page_bnt' onClick={() => setOpen(true)}> Continue</button>
            </form>
            <div id="portal-root">
                    <Modal isOpen={isOpen} close={() => setOpen(false)}>
                        <form class="userType-box">
                            <h1>What are you looking for?</h1>
                            <h2>{checked ? 'Project' : 'Individual'}</h2>
                            <h3>{checked ? 'Project' : 'Group'}</h3>
                            {/* <Switch
                                checked={checked}
                                onChange={toIndividual}
                                className='switch_btn'
                            /><br/> */}
                            <span>{message}</span>
                            <button class='bnt' id='Cont_btn' onClick={doSignup}>Sign Up</button><br/>
                        </form>
                    </Modal>
            </div>
            </div>
            
        </div>
    );
}

export default SignUp;