import React, { Component } from 'react'
import styles from './header.module.css'

class Header extends Component {
    render () {
        return(
            <header ref={this.props.refHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                    </div>
                    <nav>
                        <ul className={styles.navbar}>
                            <li className={styles.navbar__item}>
                                <a className={styles.navbar__link}>Item uno</a>
                            </li>
                            <li className={styles.navbar__item}>
                                <a className={styles.navbar__link}>Item dos</a>
                            </li>
                            <li className={styles.navbar__item}>
                                <a className={styles.navbar__link}>Item tres</a>
                            </li>
                            <li className={styles.navbar__item}>
                                <a className={styles.navbar__link}>Item cuatro</a>
                            </li>
                            <li className={styles.navbar__item}>
                                <a className={styles.navbar__link}>Item cinco</a>
                            </li>
                            <li className={styles.navbar__item}>
                                <a className={styles.navbar__link}>Item seis</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header