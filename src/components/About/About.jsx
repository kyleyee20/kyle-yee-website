import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={getImageUrl("about/computer.png")} alt="Me sitting with laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/ucsd logo.png")} alt="cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>I am a fullstack developer and graduate in 2024 from University of California, San Diego</p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/baseball.png")} alt="server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Hobbies</h3>
                        <p>Outside of programming, I enjoy playing sports (baseball, basketball, tennis) and strategy games(chess, League of Legends)</p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/ksdt.png")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Favorite Project</h3>
                        <p>My favorite project I worked on was helping create a mobile application for my school&rsquo;s radio station</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
};