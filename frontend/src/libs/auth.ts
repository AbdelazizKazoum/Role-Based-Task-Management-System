// Third-party Imports
import KeycloakProvider from 'next-auth/providers/keycloak'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  // Configure Keycloak provider
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER as string
    })
  ],

  // Session config
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  // Custom sign-in page
  pages: {
    signIn: '/login'
  },

  // Callbacks
  callbacks: {
    async jwt({ token, account, user }) {
      console.log('🚀 ~ jwt ~ user:', user)
      console.log('🚀 ~ jwt ~ account:', account)

      if (user && account?.id_token) {
        token.name = user.name
        token.email = user.email

        const idToken = JSON.parse(Buffer.from(account.id_token.split('.')[1], 'base64').toString())

        console.log('🚀 ~ jwt ~ idToken:', idToken)

        // Example: Get roles from realm_access
        token.roles = idToken.realm_access?.roles || []
      }

      return token
    },
    async session({ session, token }) {
      console.log('🚀 ~ session ~ session:', token)

      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email
      }

      return session
    }
  }
}
