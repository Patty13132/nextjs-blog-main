import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>My Impression of the first month as a CPE 3rd year student.</h2>
        <p>
          I'm expecting to improve myself in this school year. 
          I know this is gonna be challenging year for me than last year.
          I'm looking forward too to our professors to teach us very well.
          I'm expecting to have a good schedule this school year.
          I'm expecting to face more challenging activities.
        </p>
        <p>
          I know now How to Update my Website.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}