import { getSession } from "next-auth/react";
import { followUser } from "../../lib/spotify";
import { getRefreshToken } from "../../lib/prisma";


export default async function follow(req, res) {

    if (req.method === 'PUT') {
        const session = await getSession({ req })

        const { userId } = JSON.parse(req.body)

        if (session) {

            const refresh_token = await getRefreshToken(session.user.email)

            const response = await followUser(refresh_token, userId) 

            res.status(response).json([])
        } else {
            res.status(403).json([])
        }
    } else {
        res.status(404).json([])
    }


}