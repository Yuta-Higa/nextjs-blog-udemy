import Head from "next/head";
import styles from './layout.module.css'
import utilsStyles from '../styles/utils.module.css'
import Link from "next/link";
const name = 'Ukyo'
export const siteTitle = "next.js blog"
function Layout(props) {
    const { children, home } = props;
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.png"
                            className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}/>
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img
                            src="/images/profile.png"
                            className={`${utilsStyles.borderCircle}`}/>
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href='/'> ←ホームへもどる</Link>
                </div>
                )}
        </div>
    )
};

export default Layout;