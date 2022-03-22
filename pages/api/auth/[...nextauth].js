import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        SpotifyProvider({
            authorization: 'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-collaborative,playlist-read-private,playlist-modify-public,playlist-modify-private,user-follow-read,user-follow-modify',
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        }),
    ],
})