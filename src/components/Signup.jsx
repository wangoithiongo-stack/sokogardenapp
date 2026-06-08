import React from 'react'

const Signup = () => {
  return (
    <div className='row justify-content-center mt-4'>


      <div className='col-md-6 p-4 card shadow'>
        <h1>Signup</h1>
        <form action="">

          <input type="text" placeholder='Enter your username' className='form-control' /> <br/>
          <input type="email" placeholder='Enter your email address' className='form-control'/> <br/>
          <input type="password" placeholder='Enter password' className='form-control' /> <br/>
          <input type="tel" placeholder='Enter phone number' className='form-control' /> <br/>
      
        
        </form>
      </div>

    </div>
  )
}

export default Signup
