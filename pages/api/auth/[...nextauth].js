import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        SpotifyProvider({
            authorization: 'https://accounts.spotify.com/authorize?scope=ugc-image-upload,user-read-playback-state,user-modify-playback-state,user-read-currently-playing,user-read-private,user-read-email,user-follow-modify,user-follow-read,user-library-modify,user-library-read,streaming,app-remote-control,user-read-playback-position,user-top-read,user-read-recently-played,playlist-modify-private,playlist-read-collaborative,playlist-read-private,playlist-modify-public',
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        }),
    ],
})