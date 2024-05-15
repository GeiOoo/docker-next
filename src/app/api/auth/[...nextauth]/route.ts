import { randomUUID } from 'crypto';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text" },
            },
            authorize(credentials, req) {
                if (!credentials?.username) return null;

                return {
                    id: randomUUID(),
                    name: credentials.username,
                };
            },
        })
    ],
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };
