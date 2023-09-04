import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import TwitterProvider from "next-auth/providers/twitter"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({

    }),
    FacebookProvider({

    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)