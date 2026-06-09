import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

  // Step 1 : Below are our hooks that enables us to store the state of our application
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  // Step 3 : Three additional hooks
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Step 4 : Below is our function
  const handlesubmit = async (e) => {

    // Step 5 : Prevent defaults - This means you are preventing the browser from reloading when a user submits details for registraion
    e.preventDefault()

    // Step 6 : Update loading hook
    setLoading("Registration in progress...")

    // Step 7 : Try catch block
    try {

      // Step 8 : Create a form data object
      const formData = new FormData()

      // Step 9 : append
      formData.append("username", username)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("phone", phone)

      // Step 10 : axios
      const response = await axios.post("http://wangui-hsk.alwaysdata.net/api/signup", formData)

      // Step 11  
      setLoading("")
      setSuccess("User registered successfully.")

      // Step 12
      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")
    }

    catch (error) {

      // Step 13 
      setLoading("")
      setError("Oops!, something happened. Please try again later...")
    }

  }
  return (
    <div className='row justify-content-center mt-4'>


      <div className='col-md-6 p-4 card shadow'>
        <h1>Signup</h1>
        <form onSubmit={handlesubmit}>

          <h4 className="text-info">{loading}</h4>
          <h4 className='text-success'>{success}</h4>
          <h4 className='text-danger'>{error}</h4>

          {/* Step 2 : Test ur hooks */}
          <input type="text"
            placeholder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-control' />

          {/* {username} */}
          <br />

          <input type="email"
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control' />

          {/* {email} */}
          <br />

          <input type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control' />

          {/* {password} */}
          <br />

          <input type="tel"
            placeholder='Enter phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='form-control' />

          {/* {phone} */}
          <br />

          <input type="submit"
            value="Signup"
            className='btn btn-outline-primary' />

        </form>
      </div>

    </div>
  )
}

export default Signup
