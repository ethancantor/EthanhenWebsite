import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                console.log(credentials);
                if (credentials) {
                //     // Any object returned will be saved in `user` property of the JWT
                    return { id: '1', name: credentials.username, password: credentials.password }
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                }
            }
        })
    ],
}
export default NextAuth(authOptions)