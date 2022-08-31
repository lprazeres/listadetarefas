import styles from './Header.module.css';
import {BellRinging} from 'phosphor-react'

export function Header(){
    return(
        <div className={styles.header}>
            <div><BellRinging size={42} color="#60a5fa" /></div>
            <div><span>to</span><span className={styles.secondLetter}>do</span></div>
        </div>
    );
};