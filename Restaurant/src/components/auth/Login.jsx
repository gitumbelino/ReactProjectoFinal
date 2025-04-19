import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './auth.css';


export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const success = await login({
        email: enteredValues.email,
        password: enteredValues.password
      });
      
      if (success) {
        navigate('/');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value
    }));
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id='email' type='mail' name='email' onChange={(event) => handleInputChange('email',event.target.value)} value={enteredValues.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input  id='password' type='password' name='password' onChange={(event) => handleInputChange('password',event.target.value)} value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button" type='submit'>Login</button>
      </p>
    </form>
  );
}