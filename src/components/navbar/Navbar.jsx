import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AutheLinks from '../authLinks/AutheLinks'
import ThemeToggle from '../themetoggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div>
      <div className={styles.logo}>Dekmak's Blog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contacts</Link>
        <Link href="/" className={styles.link}>About </Link>
        <AutheLinks/>
      </div>
    </div>
  )
}

export default Navbar