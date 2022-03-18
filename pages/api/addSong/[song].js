import { getSession } from "next-auth/react";
import { addSongToPlaylist } from "../../../lib/spotify";
import prisma from '../../../lib/prisma'


export default async function addSong(req, res) {

    const session = await getSession({ req })

    const { song } = req.query

    if (session) {
        const { refresh_token } = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {provider: 'spotify', providerAccountId: process.env.SPOTIFY_MASTER_ACCOUNT}
            }
        })
    
        const response = await addSongToPlaylist(refresh_token, song)

        res.status(200).json(response)

    } else {
        res.status(403).json([{}])
    }

}