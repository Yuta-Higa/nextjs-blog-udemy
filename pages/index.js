import utilsStyles from '../styles/utils.module.css';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/Layout';
import { getPostsData } from "../lib/post";
import Head from "next/head";
import Image from "next/image";

//SSGの場合
export async function getStaticProps() {
    const allPostsData = getPostsData();
    console.log(allPostsData);
    return {
        props: {
            allPostsData,
        }
    }
}

export default function Home({allPostsData}) {
  return (
      <Layout　home>
          <Head>
              <title>
                  {siteTitle}
              </title>
          </Head>
          <section>
              <p className={utilsStyles.headingMd}>駆け出しエンジニア見習いです。好きな言語はjavascriptです。</p>
          </section>
          <section>
              <h2>🗒エンジニアのブログ</h2>
          </section>
            <div className={styles.grid}>
                {allPostsData.map(({ id, title, date, thumbnail }) => {
                    return (
                        <article key={id}>
                            <Link href={`/posts/${id}`}>
                                <Image src={thumbnail} className={styles.thumbnailImage}
                                       width='950px' height='400px' />
                            </Link>
                            <Link href={`/posts/${id}`}>
                                <a className={utilsStyles.boldText}>
                                    {title}
                                </a>
                            </Link>
                            <br/>
                            <small className={utilsStyles.lightText}>{date}</small>
                        </article>
                    )
                })}
            </div>
      </Layout>
  )
}
