import React, { useState } from 'react'
import './History.css'

function History() {
  const [listEmail, setListEmail] = useState(
    JSON.parse(localStorage.getItem("listEmail")) || []
  );
  return (
    <div className='listEmail'>
      {/* <ul className='ullist'>
        <hr />
        {
          listEmail >= 0 && (<h3>HISTORY EMPTY...</h3>)
        }
        {
          listEmail.map(item => (
            <>
              <li key={item.id}>{item.Email.email}</li>
              <hr />
            </>
          ))
        }
      </ul> */}
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {
          listEmail >= 0 && (<h3>HISTORY EMPTY...</h3>)
        }
        {
          listEmail.map(item => (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  {item.Email.email}
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <code>
                    EMAIL: {item.Email.email}<br />
                    AUTOCORRECT: {item.Email.autocorrect}<br />
                    DELIVERABILITY: {item.Email.deliverability}<br />
                    QUALITY SCORE: {item.Email.quality_score}<br />
                    VALID FORMAT: {item.Email.is_valid_format.text}<br />
                    FREE EMAIL: {item.Email.is_free_email.text}<br />
                    DISPOSABLE EMAIL: {item.Email.is_disposable_email.text}<br />
                    ROLE EMAIL: {item.Email.is_role_email.text}<br />
                    CATCH ALL EMAIL: {item.Email.is_catchall_email.text}<br />
                    MX FOUND: {item.Email.is_mx_found.text}<br />
                    SMTP VALID: {item.Email.is_smtp_valid.text}<br />
                  </code>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default History