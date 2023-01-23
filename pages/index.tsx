import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import StartProject from '../components/StartProject/startProject'

import HomeImage from '../public/home.jpg';
import Presentation from '../public/PetitBonhommeSolo.png';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.home}>
        <Image className={styles.homeImage} src={HomeImage} alt="img d'illustration d'outils" />
        <div className={styles.presentation}>
          <Image className={styles.image} src={Presentation} alt="img représentant un helper de North Helper)" />
          <div className={styles.text}>
            <h1 className={`${styles.title} northhelper`}>Présentation</h1>
            <p className={styles.paragraph}>
              <span className={`${styles.span} northhelper`}>North Helper </span><span className={styles.span}>filière multi-services </span>de l&apos;entreprise <span className={`${styles.span} northhelper`}>North Helper</span> vous propose diverses services dans des domaines <span className={styles.span}>d&apos;activités diversifiées.</span> Profiter de notre savoir faire, pour de l&apos;aide. <span className={styles.span}>Courses, Petit travaux, Encombrant, Livraison, Sécurité et autres services. </span>N&apos;hésitez plus contacter moi.
            </p>
          </div>
        </div>
      </section>
      <StartProject />
    </Layout>
  )
}
