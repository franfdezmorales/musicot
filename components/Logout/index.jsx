import styles from './Logout.module.css'
import { FiLogOut } from 'react-icons/fi'
import { useEffect, useRef } from 'react'
import { signOut } from "next-auth/react"

export function Logout({close}){

    const ref = useRef(null)

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            close && close(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return (
        <div ref={ref} onClick={() => signOut()} className={styles.container}>
            <FiLogOut className={styles.icon} />
            <span>Cerrar sesión</span>
        </div>
    )
}