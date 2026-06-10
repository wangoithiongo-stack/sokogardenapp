import axios from 'axios'
import React, { useState } from 'react'

const Signin = () => {

  // Step 1 : Declare the hooks
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Step 3 : Declare three additional hooks
  const [loading,setLoading] = useState("")
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")

  // Step 4 : Create a function handle submit action
  const handlesubmit = async(e) =>{
    
    // Step 5 : Prevent the site from reloading
    e.preventDefault()

    // Step 6 : Update the reloading hook with a message 
    setLoading("Waiting to sign in...")

    // Step 7 : Create a try catch block
    try{
      //  Step 8 : Create a formdata object
      const formdata = new FormData()

      // Step 9 : Append the details into the formdata
      formdata.append("email", email)
      formdata.append("password", password)

      // Step 10 : Interact with the axios module
      const response = await axios.post("http://wangui-hsk.alwaysdata.net/api/signin", formdata)

      // Step 11 : Set back the loading hook to empty
      setLoading("")

      // Step 12 : By use of an if statement, check whether there is a success message given back as a response from the hosted API. If there is it means the user has entered correct details and needs to be redirected to another page. If there is no message given back,give a response to the user meaning the details he entered are incorrect.

      if(response.data.success === "Welcome"){
        setSuccess("Login successful")
      }
      else{
        setSuccess("Login denied!")
      }
    }

    catch(error){

      // Step 13 : Setloading back to default and update the error hook just incase there is an error
      setLoading("")
      setError("OOPS! something wrong happened. Please try again...")
    }
  }

  return (
    <div className='row justify-content-center mt-5'>

      <div className='col-md-6 p-4 card shadow'>
        <h1>Signin</h1>

        <h4 className='text-info'>{loading}</h4>
        <h4 className="text-success">{success}</h4>
        <h4 className="text-danger">{error}</h4>

        <form onSubmit={handlesubmit}> 

          {/* Step 2 : Testing the hooks */}
          <input type="email"
            placeholder='Email Address'
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

          <input type="submit"
            value="Signin"
            className='btn btn-outline-primary' />

        </form>
      </div>

    </div>
  )
}

export default Signin
