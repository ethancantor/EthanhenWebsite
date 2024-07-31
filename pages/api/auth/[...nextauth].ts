import NextAuth from "next-auth";
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
            authorization: { params: { scope: 'identify email' }},
            profile(profile) {
                const format = profile.avatar.startsWith("a_") ? "gif" : "png";
                return {
                    id: profile.id,
                    name: profile.username,
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
                };
            }
        })
    ],
    callbacks: {
        async signIn(options: any) {
            if(options.account.provider !== 'discord' && !options.user.id)
                return false;

            const allowedUsers = process.env.ALLOWED_USERS?.split(' ') || [];
            return allowedUsers.includes(options.user.id.toString());
        }
    }
}
export default NextAuth(authOptions)