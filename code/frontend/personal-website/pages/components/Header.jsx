// Import React and the CSS module
import React from 'react';
import styles from '../../styles/Header.module.css'; // Adjust the path as necessary
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={`${styles.header} bg-gradient-to-r from-cyan-500 to-blue-500 h-50 flex py-4 justify-between font-sans`}>
        <div className=" px-0"><Image width={60} height={60} src={'/logo.png'}   /></div>
      <nav className="basis-1/3 flex gap-8 justify-center justify-self-center font-bold text-lg text-black">
        <Link className={`${styles.navLink} basis-1/3 flex items-center justify-center `} href={'/'}>About</Link>
        <Link className={`${styles.navLink} basis-1/3 flex items-center justify-center `} href={'/projects'}>Projects</Link>
        <Link className={`${styles.navLink} basis-1/3 flex items-center justify-center `} href={'/contact'}>Contact</Link>
      </nav>
      <div></div>
    </div>
  );
}
