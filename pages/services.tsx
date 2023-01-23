import styles from '../styles/Services.module.css';
import Head from 'next/head';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';
import NavLink from '../components/navlink';
import CountUp from 'react-countup';
import { useState } from 'react';
import Loader from '../components/Loader/loader';
import { useQuery } from 'react-query';

import { getPacks } from '../lib/requestApiPacks';
import { getServices } from '../lib/requestApiServices';

import { GiShakingHands, GiToolbox } from 'react-icons/gi';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi'

type Packs = {
    _id: string,
    name: string,
    services: string
}

type Services = {
    _id: string,
    name: string,
    example: string,
    price: number,
    priceDetails: string,
    packsId: string,
}

export default function Services() {
    const categories = ["Aides", "Services"];

    const [clicked, setClicked] = useState(false);

    const { isLoading: isLoadingPacks, isError: isErrorPacks, data: packs, error: errorPacks } = useQuery<Packs[] | any>('packs', getPacks);
    const { isLoading: isLoadingServices, isError: isErrorServices, data: services, error: errorServices } = useQuery<Services[] | any>('services', getServices);

    if (isLoadingPacks) return <Loader message='Les packs chargent...' />;
    if (isErrorPacks) return <div>J&apos;ai eu une erreur {`${errorPacks}`}</div>;

    if (isLoadingServices) return <Loader message='Les services chargent...' />;
    if (isErrorServices) return <div>J&apos;ai eu une erreur {`${errorServices}`}</div>;

    const toggle = (index: boolean | ((prevState: boolean) => boolean)) => {
        if (clicked === index) {
            return setClicked(false);
        }
        setClicked(index);
    }

    return (
        <Layout>
            <LayoutPage title='Mes services' startProject>
                <Head>
                    <title>North Helper | Mes aides et services</title>
                </Head>
                {
                    categories.map((category, index: any) => (
                        <div key={category + index} className={styles.packs}>
                            <h2 className={styles.title} onClick={() => toggle(index)}>
                                {category === "Aides" ? <GiShakingHands /> : <GiToolbox />}
                                {category} {clicked === index ? <FaChevronUp /> : <FaChevronDown />}
                            </h2>
                            {
                                clicked === index ? (
                                    <div className={styles.box}>
                                        {
                                            packs.map((pack: Packs) => (
                                                pack.name.match(/Aide/i) && index === 0 ? (
                                                    <div key={pack._id} className={styles.service}>
                                                        <h3 className={styles.serviceTitle}><GiShakingHands /> {pack.name}</h3>
                                                        <ul className={styles.list}>
                                                            {
                                                                services.map((service: Services) => (
                                                                    pack.services.includes(service._id) ? (
                                                                        <li key={service._id}>
                                                                            <p className={styles.name}>{service.name} {service.example ? <em>ex : {service.example}</em> : ''}</p>
                                                                            <p className={styles.price}>
                                                                                <CountUp className={styles.priceCountUp} end={service.price} suffix=" €" decimals={2} decimal="," />
                                                                                {service.priceDetails ? <span> {service.priceDetails}</span> : ''}
                                                                            </p>
                                                                        </li>
                                                                    ) : ''
                                                                ))
                                                            }
                                                        </ul>
                                                        <div className={styles.info}>
                                                            <NavLink className={styles.btnMecontacter} href="/contact" title='Me contacter'>Me contacter</NavLink>
                                                        </div>
                                                    </div>
                                                ) : pack.name.match(/Service/i) && index === 1 ? (
                                                    <div key={pack._id} className={styles.service}>
                                                        <h3 className={styles.serviceTitle}><GiToolbox /> {pack.name}</h3>
                                                        <ul className={styles.list}>
                                                            {
                                                                services.map((service: Services) => (
                                                                    pack.services.includes(service._id) ? (
                                                                        <li key={service._id}>
                                                                            <p className={styles.name}>{service.name} {service.example ? <em>ex : {service.example}</em> : ''}</p>
                                                                            <p className={styles.price}>
                                                                                <CountUp className={styles.priceCountUp} end={service.price} suffix=" €" decimals={2} decimal="," />
                                                                                {service.priceDetails ? <span> {service.priceDetails}</span> : ''}
                                                                            </p>
                                                                        </li>
                                                                    ) : ''
                                                                ))
                                                            }
                                                        </ul>
                                                        <div className={styles.info}>
                                                            <NavLink className={styles.btnMecontacter} href="/contact" title='Me contacter'>Me contacter</NavLink>
                                                        </div>
                                                    </div>
                                                ) : ''
                                            ))
                                        }
                                        <div className={`${styles.service} ${styles.movement}`}>
                                            <h3 className={styles.serviceTitle}> <FiAlertTriangle />Information !</h3>
                                            <em>Certainnes aides ou services sont soumis à des frais de déplacements :</em>
                                            <ul className={styles.list}>
                                                <li><CountUp prefix="Pour 1 à 10 Km = " end={6.50} suffix=" €" decimals={2} decimal="," /></li>
                                                <li><CountUp prefix="Pour 11 à 20 Km = " end={13} suffix=" €" decimals={2} decimal="," /></li>
                                                <li><CountUp prefix="Pour 21 à 30 Km = " end={19.50} suffix=" €" decimals={2} decimal="," /></li>
                                                <li><CountUp prefix="Au-delà des 30 Km d'Evreux = " end={0.65} suffix=" €/Km en +" decimals={2} decimal="," /></li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    ))
                }
            </LayoutPage>
        </Layout>
    );
}