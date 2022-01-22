import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingLg}>404 - Page Not Found</h1>
      </section>
    </Layout>
  )
}
