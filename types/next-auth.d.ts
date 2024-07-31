import NextAuth from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            // is user admin
            role: string,
            // user discord ID
            id: string | number,
            // discord cdn link for avatar
            image: string,
            // email address
            email?: string
            // discord name
            name: string
        }   
    }
}