import styles from './layout.module.css';
import Head from 'next/head';
import Header from './Header/header';
import Wave from './Wave/wave';
// import Information from './Information/information';
import HeaderMobileTop from './Header/HeaderMobile/HeaderMobileTop/headerMobileTop';
// import HeaderMobileBottom from './Header/HeaderMobile/HeaderMobileBottom/headerMobileBottom';
import Image from 'next/image';
import Qrcode from '../public/qrcode.png';
// import { useSelector, useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import Admin from '../pages/admin';

export const siteTitle = `North Helper | Aide et Multi-services`;

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    // const goToAdmin = useSelector((state: any) => state.admin.goToAdmin);

    // const router = useRouter();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (router.pathname === '/admin') {
    //         dispatch(goToAdmin());
    //         return;
    //     }
    // })

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="description" content="Profiter du savoir faire de North Helper, pour de l'aide. Courses, Petit travaux, Encombrant, Livraison, Sécurité et autres services. N'hésitez plus contacter moi." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            {/* { */}
                {/* goToAdmin ? <Admin /> : ( */}
                    <div className={styles.container}>
                        <Header />
                        <main className={styles.main}>
                            <HeaderMobileTop />
                            {/* <Information /> */}
                            {children}
                            <Wave />
                            {/* <HeaderMobileBottom /> */}
                            <Image className={styles.qrcode} src={Qrcode} alt="qrcode du site North Helper" title="Vous devez partir ? Scanez-moi pour me consulter sur votre téléphone !" />
                        </main>
                    </div>
                {/* ) */}
            {/* } */}
        </>
    )
}