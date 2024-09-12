import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&rsquo;m Kyle</h1>
            <p className={styles.description}>I&rsquo;m a versatile full stack developer with a passion for continually expanding my skill set and embracing new challenges. Reach out if you would like to learn more!</p>
            <a href="mailto:kyleyee7546@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        {/* <img src={getImageUrl("hero/waving-fixed.png")} alt="Hero image of me" className={styles.heroImg} /> */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};