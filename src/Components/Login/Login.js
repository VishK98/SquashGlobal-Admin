import React, { useState } from "react";
import loginImage from "../../Image/img-login (1).png";
import "./Login.css";
import { loginResponse } from "../../utils/api"

function Login() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    if (formData.username && formData.password) {
      try {
        const response = await loginResponse(formData);
        console.log('Login successful:', response.message);
        if(response.status === true){
          localStorage.setItem('isLoggedIn', 'true');
          window.location.reload();
          window.location.href = '/dashboard';
        }else{
          alert(response.message)
        }
        // Handle successful login (e.g., store token, redirect user)
      } catch (error) {
        console.error('Error logging in:', error.message);
        // Handle login error (e.g., display error message to user)
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <section className="vh-100 font">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={loginImage} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="mt-3" onSubmit={handleLogin}>
              <label htmlFor="username">
                username address
                <sup
                  style={{
                    color: "red",
                    marginLeft: "5px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </sup>
              </label>
              <br />
              <input
                type="username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                // value={username} onChange={(e) => setusername(e.target.value)}
                autoComplete="off"
                className="form-control form-control-lg"
                placeholder="Enter your username"
                required
              />
              <label htmlFor="password" className="mt-3">
                Enter password
                <sup
                  style={{
                    color: "red",
                    marginLeft: "5px",
                    fontWeight: "bold",
                  }}
                >
                  *
                </sup>
              </label>
              <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                // value={password} onChange={(e) => setPassword(e.target.value)}

                autoComplete="off"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                required
              />
              <div className="text-center mt-4">
                <button type="submit" className="submit-depth">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
