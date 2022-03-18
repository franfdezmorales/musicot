import prisma from '../../lib/prisma'

export default async function getRegisteredUsers(req, res) {

    const registeredUsers = await prisma.user.findMany({})
    res.status(200).json(registeredUsers)
    
}
