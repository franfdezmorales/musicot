import { getSession } from "next-auth/react";
import { getSongsFromSearch } from "../../../lib/spotify";
import prisma from '../../../lib/prisma'


export default async function getSearchSongs(req, res) {

    const session = await getSession({ req })
    const { search } = req.query

    if (session) {
        const { refresh_token } = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {provider: 'spotify', providerAccountId: session.user.name}
            }
        })
    
        const songs = await getSongsFromSearch(refresh_token, search)

        res.status(200).json(songs)
    } else {
        res.status(403).json([{}])
    }

}