import NextAuth, { Session, User } from "next-auth";
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
                const allowedUsers = process.env.ALLOWED_USERS?.split(' ') || [];
                console.log('PROFILE CALLBACK');
                return {
                    id: profile.id,
                    name: profile.username,
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`,
                    // email: profile.email,
                    role: allowedUsers.includes(profile.id) ? 'admin' : 'user'
                };
            }
        })
    ],
    callbacks: {
        async signIn(options: any) {
            if(options.account.provider !== 'discord' && !options.user.id)
                return false;
            return true;
        },
        jwt(data: any){
            if(data.user) data.token.role = data.user.role;
            return data.token;
        },
        session(data: any){
            if(data.session.user) data.session.user.role = data.token.role;
            return data.session;
        }
    }
}
export default NextAuth(authOptions)