import styles from '../styles/404.module.css';
import SoucoupeErreur from '../public/soucoupeerreur.png';
import img404 from '../public/404.png';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';


import { GiShakingHands } from 'react-icons/gi';

export default function Error404() {
    return (
        <Layout>
            <LayoutPage title='404' startProject>
                <Head>
                    <title>North Helper | Erreur 404</title>
                </Head>
                <section className={styles.error404}>
                    <Image className={styles.soucoupe} src={SoucoupeErreur} alt="img représentant deux assistant North Helper ce fessant aspirés par une soucoupe" />
                    <div className={styles.back}>
                        <p className={`${styles.message} northhelper`}>Oups !! On dirait que tu as besoin d&apos;aide, cà tombe bien North Helper est la pour vous aider</p>
                        <Link className={styles.link} title="Accepter l'aide" href="/">Accepter l&apos;aide <GiShakingHands /></Link>
                    </div>
                    <Image className={styles.img404} src={img404} alt="img représentant erreur 404" />
                </section>
            </LayoutPage>
        </Layout>
    )
}