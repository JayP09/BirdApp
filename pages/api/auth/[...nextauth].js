import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  callbacks: {
    // What this function is doing It is taking the name from a Google account, splitting it into two parts, then joining them without any space and lowercasing the name.
    async session({session,token}) {
      session.user.tag = session.user.name.split(" ").join("").toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    }
  }
})