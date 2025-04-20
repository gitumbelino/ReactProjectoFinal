import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/auth/auth.css';

export default function Signup() {
  
  const [passwordNotEqual, setPasswordsAreNotEqual] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data.password != data.confirmPassword) {
      setPasswordsAreNotEqual(true);
      return;
    }

    const user = {
      email: data.email,
      password: data.password,
      firstName: data["first-name"],
      lastName: data["last-name"],
      role: data.role,
      termsAccepted: data.terms === "on",
    };

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(response => {
      if (response.ok) {
        navigate("/", {
          state: { message: "User successfully registered!" },
        });
      } else {
        throw new Error("Registration failed");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    });
  }
    return (
      <form onSubmit={handleSubmit}>
        <h2>React Restaurant</h2>
        <p>Register</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required />
          </div>
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirmPassword"
              required
            />
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" 
            required/>
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">Profile type</label>
          <select id="role" name="role" required>
            <option value="student">Staff</option>
            <option value="teacher">Customer</option>
          </select>
        </div>
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input required type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }