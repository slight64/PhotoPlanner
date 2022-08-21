import React from 'react';
import styles from '../styles/header.module.css'
const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <section className={styles.navigation}>
                    <div className={styles.logo}>Logo</div>
                    <nav className={styles.headernavigation}>
                        <p className={styles.headerusername}>Иван Иванов</p>
                        <img className={styles.headeruserimage} alt={''}></img>
                    </nav>
                </section>
            </header>
        </div>
    );
};

export default Header;