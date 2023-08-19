import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/schedule">Schedule</Link></li>
                        <li><Link href="/players">Players</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <h1>Welcome to Sackville High Kingfishers</h1>
                <p>Stay updated with our latest matches, players, and news!</p>
            </main>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Sackville High Kingfishers</p>
            </footer>
        </div>
    );
};

export default Home;
