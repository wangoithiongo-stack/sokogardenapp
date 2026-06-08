import React from 'react'

const Signin = () => {
  return (
    <div className='row justify-content-center mt-5'>

      <div className='col-md-6 p-4 card shadow'>
         <h1>Signin</h1>

          <form action="">
            <input type="email" placeholder='Email Address' className='form-control' /> <br/>
            <input type="password" placeholder='Enter password' className='form-control' /> <br/>

          </form>
      </div>
     
    </div>
  )
}

export default Signin
