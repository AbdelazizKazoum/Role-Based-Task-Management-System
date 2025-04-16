// Third-party Imports
import KeycloakProvider from 'next-auth/providers/keycloak'
import type { NextAuthOptions } from 'next-auth'

console.log(process.env.KEYCLOAK_CLIENT_SECRET)
export const authOptions: NextAuthOptions = {
  // 🔐 Configure only Keycloak provider
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER as string
    })
  ],

  // 📦 Session config
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  // 📄 Custom sign-in page
  pages: {
    signIn: '/login'
  },

  // 🔁 Callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name
        token.email = user.email
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email
      }

      return session
    }
  }
}
