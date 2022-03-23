import prisma, { getRefreshToken } from '../../lib/prisma'
import { getSession } from "next-auth/react";
import { getFollowers } from '../../lib/spotify'

export default async function getUserProfiles(req, res) {

    const session = await getSession({ req })

    if (session) {
        const registeredUsers = await prisma.user.findMany({
            include: {
                accounts: {
                    select: {
                        providerAccountId: true
                    }
                }
            }
        })

        let idUsers = ''
        registeredUsers.forEach(user => {
            const { providerAccountId } = user.accounts[0]
            idUsers.length > 0 ? idUsers += `,${providerAccountId}` : idUsers += `${providerAccountId}`
        })

        const refresh_token = await getRefreshToken(session.user.email)
        const usersFollowed = await getFollowers(refresh_token, idUsers)

        let finalUsers = []
        registeredUsers.forEach((user, index) => {
            const newUser = { ...user, following: usersFollowed[index] }
            finalUsers = [...finalUsers, newUser]
        })

        res.status(200).json(finalUsers)
    } else {
        res.status(403).json(null)
    }

}
