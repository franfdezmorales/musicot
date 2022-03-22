import { getSession } from "next-auth/react";
import { getRecommendedTracks } from "../../lib/spotify";
import { getRefreshToken } from "../../lib/prisma";


export default async function getRecommendedSongs(req, res) {

    const session = await getSession({ req })

    if (session) {
        
        const refresh_token = await getRefreshToken(session.user.email)
    
        const songs = await getRecommendedTracks(refresh_token)

        res.status(200).json(songs)
    } else {
        res.status(403).json([{}])
    }

}