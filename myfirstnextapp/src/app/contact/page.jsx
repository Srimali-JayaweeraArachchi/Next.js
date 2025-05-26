import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

function page() {
  return (
    <> 
    <div>
      <h1>Contact us page</h1>
       <Link href="/" className={styles.link}>Back to home</Link>
    </div>
    </>
    
  )
}

export default page
