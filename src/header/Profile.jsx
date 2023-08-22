import React from 'react'
import { User, useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

  const {user, isAuthenticated} = useAuth0()

  return (
    isAuthenticated && (
      <div className="flex items-center space-x-2">
        {user?.picture && <img src={user.picture} alt={user?.name} className="w-8 h-8 rounded-full"/>}
        <span className="hidden sm:inline text-white">{user?.name}</span>
      </div>
    )
    
  )
}

export default Profile
