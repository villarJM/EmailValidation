import React, { useState } from 'react'
import './EmailValidation.css'

function EmailValidation() {
  const [inputEmail, setInputEmail] = useState(
    JSON.parse(localStorage.getItem("inputEmail")) || []
  );
  return (

    <div className='EmailInformation'>
        {
          inputEmail >= 0 && (
            <h3>ABSTRACT EMPTY...</h3>
          )
        }
        {
          inputEmail.map(item => (
            <ul key={item.id} className='ListInformation'>
              <li className='ListInfo'><span className='Titulo'>EMAIL: </span><div className='Info'>{item.Email.email}</div></li>
              <li className='ListInfo'><span className='Titulo'>AUTOCORRECT: </span><div className='Info'>{item.Email.autocorrect}</div></li>
              <li className='ListInfo'><span className='Titulo'>DELIVERABILITY: </span><div className='Info'>{item.Email.deliverability}</div></li>
              <li className='ListInfo'><span className='Titulo'>QUALITY SCORE: </span><div className='Info'>{item.Email.quality_score}</div></li>
              <li className='ListInfo'><span className='Titulo'>VALID FORMAT: </span><div className='Info'>{item.Email.is_valid_format.text}</div></li>
              <li className='ListInfo'><span className='Titulo'>FREE EMAIL: </span><div className='Info'>{item.Email.is_free_email.text}</div></li>
              <li className='ListInfo'><span className='Titulo'>DISPOSABLE EMAIL: </span><div className='Info'>{item.Email.is_disposable_email.text}</div></li>
              <li className='ListInfo'><span className='Titulo'>ROLE EMAIL</span><div className='Info'>{item.Email.is_role_email.text}</div></li>
              <li className='ListInfo'><span className='Titulo'>CATCH ALL EMAIL: </span><div className='Info'>{item.Email.is_catchall_email.text}</div></li>
              <li className='ListInfo'><span className='Titulo'>MX FOUND: </span><div className='Info'>{item.Email.is_mx_found.text}</div></li>
              <li className='ListInfo'><span className='Titulo'>SMTP VALID: </span><div className='Info'>{item.Email.is_smtp_valid.text}</div></li>
            </ul>
          ))
        }
    </div>
  )
}

export default EmailValidation