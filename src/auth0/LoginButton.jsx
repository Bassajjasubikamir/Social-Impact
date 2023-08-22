import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {

  const {loginWithRedirect, isAuthenticated} = useAuth0()

  return (
    !isAuthenticated && (
      <button className='text-white logBut' onClick={() => loginWithRedirect()}>
        Sign In
      </button>
    )
    
  )
}

export default LoginButton
