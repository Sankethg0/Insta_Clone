import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="mycard">
    <div className="card auth-card input-field">
      <h2 className="brand-logo">Instagram</h2>
      <input
        type="text"
        placeholder="Name"/>
      <input
        type="text"
        placeholder="email"/>
      <input
        type="password"
        placeholder="password"/>
      <button className="btn waves-effect waves-light #616161 grey darken-2">
          SignUp
      </button>
      <h5>
          <Link to="/login">Already have an account ?</Link>
      </h5>
      <h6>
          <Link to="/reset">Forgot password ?</Link>
      </h6>
      </div>
</div>
  )
}

export default Signup