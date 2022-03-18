
import { useEffect, useState } from 'react'
import styles from '../styles/SongDay.module.css'

export default function SongDay({search, number}) {

    const [song, setSong] = useState(false)

    useEffect(() => {
        fetch(`/api/songs/s=${search};n=${number}`)
        .then(res => res.json())
        .then(console.log)
    }, [])

    return (
        <div />
    )
}



export async function getStaticProps() {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const randomSearch = characters.charAt(Math.floor(Math.random() * characters.length))
    const randomNumber = Math.floor(Math.random() * 50)

    return {
        props: {
            search: randomSearch, 
            number: randomNumber
        }, 
        revalidate: 86400
    }

}


