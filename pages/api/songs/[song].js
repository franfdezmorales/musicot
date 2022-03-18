import { getSession } from "next-auth/react";
import { getSongData, getSongsFromSearch } from "../../../lib/spotify";
import prisma from '../../../lib/prisma'


export default async function getSong(req, res) {

    const session = await getSession({ req })

    const { song } = req.query

    const data = song.split(';')

    const search = data[0].replace('s=', '')
    const number = Number(data[1].replace('n=', ''))

    if (session) {
        const { refresh_token } = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {provider: 'spotify', providerAccountId: session.user.name}
            }
        })
    
        const songs = await getSongsFromSearch(refresh_token, search)
        const song = songs?.tracks?.items[number]
        const songData = await getSongData(refresh_token, song.id)

        res.status(200).json({song: song, songData: songData})
    } else {
        res.status(403).json([{}])
    }

}