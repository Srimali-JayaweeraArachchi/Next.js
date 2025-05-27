'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {

  const handleClick = () => {
    alert("Hello from the Home page!");
  }

  return (
    <><h1>Home Page</h1>
    <ul>
      <li><Link href="/" className={styles.link}> Home</Link></li>
      <li><Link href="/services" className={styles.link}> Services</Link></li>
      <li><Link href="/products" className={styles.link}> Products</Link></li>
      <li><Link href="/about" className={styles.link}> About</Link></li>
      <li><Link href="/contact" className={styles.link}> Contact us</Link></li>
      <li><Link href="/about/branches" className={styles.link}> Branches</Link></li>
       <li><Link href="/products/vegis" className={styles.link}> Vegis</Link></li>
    </ul>

    <Link href="https://nextjs.org/"target="_blank" id={styles.specialLink}>NextJS Site</Link>

    {/* <button onClick={() => alert("Hello!")}>Click Me!</button> */}
    <button onClick={handleClick}>Click Me!</button>
    
    </>
    
  )
}
