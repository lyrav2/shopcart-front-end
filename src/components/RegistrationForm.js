import React from 'react';
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [message, setMessage] = useState(" ");
  const [confirmPwd, setConfirmPwd] = useState("");

  const onCreateAccount = (evt) => {
    evt.preventDefault();
    if (formData.password === confirmPwd) {
      fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((json) => {
          setMessage(json.message);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
          });
          setConfirmPwd("");
        })
        .catch((err) => {
          console.log(`An error has occurred: ${err}`);
        });
    } else {
      setMessage("Passwords do not match.");
    }
  };

  return (
    <div className="container">
      <div className="registration-form">
        <div className="row">
          <div className="col">
            <h2>Register</h2>
            <form action="" onSubmit={onCreateAccount}>
              <div className="form-control">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  placeholder="First Name"
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  id="confirmPass"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPwd(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="register-message">{message}</div>
              <div className="form-control">
                <button className="btn" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="col">
            <h2>Continue with</h2>
            <div className="register-social-media">
              <button className="btn">Google</button>
              <button className="btn">Facebook</button>
              <button className="btn">Twitter</button>
              <button className="btn">Amazon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
