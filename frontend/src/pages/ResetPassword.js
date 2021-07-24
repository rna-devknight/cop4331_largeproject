import React, { useState, useEffect } from "react";
import '../App.css';

function ResetPassword()
{
    var email, code, newpassword, newpassword_confirm;
    const [message, setMessage] = useState('');
    const [showSend, setShowSend] = useState(true);
    const [showSendEmail, setShowSendEmail] = useState(true);
    const api_path = 'https://kindling-lp.herokuapp.com/';

    const sendResetEmail = async event =>
    {
        event.preventDefault();

        var obj = {email_str:email.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(api_path + 'api/send_password_reset',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());
            
            if( res['success_bool'] == false )
            {
                setMessage('* Unexpected error, please register first.');
            }
            else
            {
                showSendEmail(false);
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        } 
    }


    const verifyCode = async event =>
    {
        var obj = {code_str:code.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch(api_path + 'api/verify_email',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());
            
            if( res['success_bool'] == false )
            {
                setMessage('* Uncorrect code. please try again!');
            }
            else
            {
                window.location.href = '/Login';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        } 
    }

    return (
        <div id='reset_password_wrrper'>
            { showSend ?

            showSendEmail ? 
                <form class='sendEmail'>
                    <h1>Email Verification</h1>
                    <input type='email' class='reset_input' ref={(c) => email = c} placeholder='email'></input>
                    <h2>{message}</h2>
                    <button class='btn' id='resetBtn' onClick={sendResetEmail}>Send Reset Email</button>
                </form>
                :
                <div class='codeVerification'>
                    <h1>Code Verification</h1>
                    <input type='text' class='verification_code' ref={(c) => code = c} placeholder='code'></input><br/>
                    <h2>{message}</h2><br/><br/><br/>
                    <button class='btn' id='code_verify_btn' onClick={verifyCode}>Verify Code</button>
                </div>
            :
            <div id='reset_div'>
                <h1>Reset Password</h1><br/>
                <input type="password" class="newpassword" id='newpassword' placeholder='new password' ref={(c) => newpassword = c}></input><br/>
                <input type="password" class="newpassword" id='newpassword_confirm' placeholder='confirm password' ref={(c) => newpassword_confirm = c}></input><br/>
                <span>{message}</span><br/><br/><br/>
                <button class='bnt' id='reset_password_bnt' onClick={verifyCode}>Reset Password</button><br/>
            </div>
            }
        </div>
    );
}

export default ResetPassword;