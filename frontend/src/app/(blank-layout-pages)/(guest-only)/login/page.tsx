/* eslint-disable import/no-unresolved */
// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Login from '@views/Login'

import { getServerMode } from '@/@core/utils/serverHelpers'

// Server Action Imports

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const LoginPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <Login mode={mode} />
}

export default LoginPage
