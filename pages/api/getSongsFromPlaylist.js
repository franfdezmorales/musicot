import { getSession } from "next-auth/react";
import { getSongsFromPlaylist } from "../../lib/spotify";
import prisma from '../../lib/prisma'


export default async function getPlaylists(req, res) {

    const session = await getSession({ req })

    if (session) {
        const { refresh_token } = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {provider: 'spotify', providerAccountId: session.user.name}
            }
        })
    
        const songs = await getSongsFromPlaylist(refresh_token)

        res.status(200).json(songs)
    } else {
        res.status(403).json([{}])
    }

}