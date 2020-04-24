import React, { useState } from "react";
import axios from 'axios';
 


const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
   const [login, setLogin] = useState({
     username: '',
     password: '',
   })


   const handleChanges = e => {
     setLogin({...login, [e.target.name]: e.target.value});
   };

   const handleSubmit = e => {
     e.preventDefault();
     axios
     .post("http://localhost:5000/api/login", login)
     .then(res => {
       console.log("from login post req", res)
       localStorage.setItem("token", res.data.payload)
       props.history.push("/protected")
     })
     .catch(err => {
       console.log("there was an error logging in", err)
     })
   }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
  

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username: 
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleChanges}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChanges}
            />
          </label>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
