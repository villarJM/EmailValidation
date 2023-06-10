import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import './Navbar.css'

function Navbar() {
  const [listEmail, setListEmail] = useState(
    JSON.parse(localStorage.getItem("listEmail")) || []
  );
  const [inputEmail, setInputEmail] = useState(
    JSON.parse(localStorage.getItem("inputEmail")) || []
  );

  const EmailValidation = (url) => {
    fetch(url)
      .then((response) => response.json()).then(
        data => {
          console.log(data);
          localStorage.setItem("inputEmail", JSON.stringify([{id: uuidv4(), Email: data,}]));
          setInputEmail([{id: uuidv4(), Email: data,}]);
          const newListEmail = [
            ...listEmail,
            {
              id: uuidv4(), Email: data,
            }
          ]
          localStorage.setItem("listEmail", JSON.stringify(newListEmail));
          setListEmail(newListEmail);
        }
      )
  }
  const EmailInput = () => {
    const apiKey = 'fb508975d1b24e5abe52334b67ba9928';
    const email = document.querySelector('#email').value;
    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;
    console.log(email);
    EmailValidation(url);
  }



  return (
    <div className="container text-center">
      <form className="row g-3 InputBox">
        <div className="col-6">
          <input type="email" className="form-control email" id="email" placeholder="Email"/>
        </div>
        <div className="col-1">
          <button onClick={EmailInput} type="button" className="btn btn-primary mb-3 submit">Submit</button>
        </div>
      </form>
      <div className='row'>
        <div className='col-md-12'>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className='linknav' to='/Email'>Abstract</Link>
            </li>
            <li className="nav-item">
              <Link className='linknav' to='/History'>History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar