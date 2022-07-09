import Head from "next/head";
import styles from './layout.module.css'
import utilsStyles from '../styles/utils.module.css'
import Link from "next/link";
import Image from "next/image";
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
                        <Image
                            src="/images/profile.png"
                            className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
                            width='8rem' height='8rem'/>
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
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