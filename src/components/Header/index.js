import React from 'react';
import Link from "next/link";
import Logo from "../../../public/airbnb-logo.png";
import { SearchIcon } from '@heroicons/react/solid';
import styles from "./index.module.scss";

const Index = () => {
    return (

        <header className={styles.header__main}>
            
            <div className={styles.header__logo}>
                <Link href="/">
                    <img src={Logo.src} alt="Airbnb" />
                </Link>
            </div>
            
            <div className={styles.header__search}>
                <input type="texte" placeholder="Rechercher"/>
                <SearchIcon className={styles.header__searchicon}/>
            </div>

        </header>

    );
}

export default Index;