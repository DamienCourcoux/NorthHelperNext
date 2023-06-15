import styles from '../styles/Contact.module.css';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import NavLink from '../components/navlink';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import CountUp from 'react-countup';
// import Loader from '../components/Loader/loader';
// import { useQuery } from 'react-query';

// import {
//   createHandleChange, createHandleChangeInt, createHandleChangeText, createHandleChangeDetails, sendEmailSuccess
// } from '../redux/reducer/reducer';
// import { getPacks } from '../lib/requestApiPacks';
// import { getServices } from '../lib/requestApiServices';
// import { addClient, /* sendEmail */ } from '../lib/requestApiClients';

import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaSnapchatSquare,
  FaDiscord, FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';
// import { GiShakingHands, GiToolbox } from 'react-icons/gi';

// import Field from '../components/Field/field';

// type Packs = {
//   _id: number;
//   name: string;
//   serviceId: string;
// }

// type Services = {
//   _id: string,
//   name: string,
//   example: string,
//   price: number,
//   priceDetails: string,
//   packsId: string,
// }


export default function Contact() {
  // const lastname = useSelector((state: any) => state.app.lastname);
  // const firstname = useSelector((state: any) => state.app.firstname);
  // const email = useSelector((state: any) => state.app.email);
  // const telephone = useSelector((state: any) => state.app.telephone);
  // const city = useSelector((state: any) => state.app.city);
  // const zipCode = useSelector((state: any) => state.app.zipCode);
  // const selectPackForFormContact = useSelector((state: any) => state.app.selectPackForFormContact);
  // const nameForPack = useSelector((state: any) => state.app.nameForPack);
  // const details = useSelector((state: any) => state.app.details);
  // const selectServiceForFormContact = useSelector((state: any) => state.app.selectServiceForFormContact);
  // const categories = ["Aides", "Services"];

  // const dispatch = useDispatch();
  // const router = useRouter();

  // const [clicked, setClicked] = useState(false);
  // const [myIndex, setMyIndex] = useState();

  // const toggle = (index: any) => {
  //   if (clicked === index) return setClicked(false);

  //   setClicked(index);
  //   setMyIndex(index);
  // };

  // const { isLoading: isLoadingServices, isError: isErrorServices, data: services, error: errorServices } = useQuery<Services[] | any>('services', getServices);

  // const { isLoading: isLoadingPacks, isError: isErrorPacks, data: packs, error: errorPacks } = useQuery<Packs[] | any>('packs', getPacks);

  // if (isLoadingServices) return <Loader message='Les services chargent...' />;
  // if (isErrorServices) return <div>J&apos;ai eu une erreur {`${errorServices}`}</div>;

  // if (isLoadingPacks) return <Loader message='Les packs chargent...' />;
  // if (isErrorPacks) return <div>J&apos;ai eu une erreur {`${errorPacks}`}</div>;

  // const notify = () => toast.success(<><p>Merci {firstname} de votre confiance !</p> <br /> <p>Votre demande a été envoyée avec succès.</p> <br /> <p>Vous recevrez une réponse dans les plus brefs délais.</p></>, { icon: <FaCheckCircle className='checkToast' /> });
  // const notifyLastnameError = () => toast.error(`Vous n'avez pas écrit votre nom`);
  // const notifyFirstnameError = () => toast.error(`Vous n'avez pas écrit votre prénom`);
  // const notifyEmailError = () => toast.error(`Vous n'avez pas écrit votre email`);
  // const notifyTelephoneError = () => toast.error(`Vous n'avez pas écrit votre numéro de téléphone`);
  // const notifyCityError = () => toast.error(`Vous n'avez pas écrit votre ville`);
  // const notifyZipCodeError = () => toast.error(`Vous n'avez pas écrit votre code postal`);
  // const notifySelectPackError = () => toast.error(`Vous n'avez pas sélectionné le pack qui vous intéresse`);
  // const notifySelectServiceError = () => toast.error(`Vous n'avez pas sélectionné ${myIndex === 0 ? 'l\'aide' : 'le service'} qui vous intéresse`);
  // const notifyDescriptionError = () => toast.error(`Vous n'avez pas décri votre demande`);

  // const handleChange = (value: any, name: string) => {
  //   if (name === 'telephone' && isNaN(value)) return;
  //   if (name === 'telephone' && value.length > 10) return;
  //   if (name === 'zipCode' && value.length > 5) return;
  //   const payload = { name, value }
  //   dispatch(createHandleChange(payload));
  // };

  // const handleChangeInt = (e: any) => {
  //   const payload = { name: e.target.name, target: e.target.value, id: e.target.id }
  //   dispatch(createHandleChangeInt(payload));


  // };

  // const handleChangeText = (e: any) => {
  //   const payload = { name: e.target.name, target: e.target.value, id: e.target.id }
  //   dispatch(createHandleChangeText(payload));
  //   if (e.target.name === 'selectServiceForFormContact') {
  //     const payload = { name: e.target.name, target: e.target.className, id: e.target.id }
  //     dispatch(createHandleChangeText(payload));
  //   }


  // };

  // const handleChangeDetails = (e: any) => {
  //   const payload = { name: e.target.name, target: e.target.value }
  //   dispatch(createHandleChangeDetails(payload));

  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   if (lastname === '') {
  //     notifyLastnameError();
  //   } else if (firstname === '') {
  //     notifyFirstnameError();
  //   } else if (email === '') {
  //     notifyEmailError();
  //   } else if (telephone === '') {
  //     notifyTelephoneError();
  //   } else if (city === '') {
  //     notifyCityError();
  //   } else if (zipCode === '') {
  //     notifyZipCodeError();
  //   } else if (selectPackForFormContact === '') {
  //     notifySelectPackError();
  //   } else if (selectServiceForFormContact === '') {
  //     notifySelectServiceError();
  //   } else if (details === '') {
  //     notifyDescriptionError();
  //   } else {
  //     const desiredService = `Intéressé par le pack : ${nameForPack}, plus précisément par ${myIndex === 0 ? 'l\'aide' : 'le service'} "${selectServiceForFormContact}"`;
  //     const formData = {
  //       lastname,
  //       firstname,
  //       email,
  //       telephone,
  //       city,
  //       zipCode,
  //       desiredService,
  //       details
  //     }
  //     const json = await addClient(formData);
  //     // const jsonSendemail = await sendEmail(formData);
  //     if (json /* && jsonSendemail */) {
  //       dispatch(sendEmailSuccess());
  //       router.push('/');
  //       notify();
  //       console.log(formData);
        
  //     }
  //   }
  // };

  return (
    <Layout>
      <LayoutPage title='Me contacter'>
        <Head>
          <title>North Helper | Me contacter</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.information}>
            <div className={styles.informationTop}>
              <h2 className={`${styles.informationTopTitle} northhelper`}>Mes Coordonnées</h2>
              <p className={styles.informationTopSubtitle}>Remplissez le formulaire et je vous répondrai au plus vite</p>
              <ul>
                <li><a href="tel:07 49 67 97 47" title="07 49 67 97 47"><FaPhone />07 49 67 97 47</a></li>
                <li><a href="mailto:north.helper.services@gmail.com" title="north.helper.services@gmail.com"><FaEnvelope />north.helper.services@gmail.com</a></li>
                <li><FaMapMarkerAlt /> Évreux et ses alentours</li>
              </ul>
              <ul className='reseauxList'>
                <li className='reseauxListItem'><a href="https://m.facebook.com/profile.php?id=100085589310579" target="_blank" rel="noopener noreferrer" className="facebook" title='Facebook'><FaFacebook /></a></li>
                <li className='reseauxListItem'><a href="https://www.snapchat.com/add/north_helper?share_id=QzUzNzZBM0ItQzM5Mi00RkU3LThGRDEtOTc3RkU0NTE4MUU1&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="snapchat" title='Snapchat'><FaSnapchatSquare /></a></li>
                <li className='reseauxListItem'><a href="https://discord.gg/cnDY943mEZ" target="_blank" rel="noopener noreferrer" className="discord" title='Discord'><FaDiscord /></a></li>
              </ul>
            </div>
            {/* {
              selectPackForFormContact && (
                <div className={styles.informationBottom}>
                  <article className={styles.ticket}>
                    <header className={styles.ticketHeader}>
                      <h3>Prévisualisation :</h3>
                    </header>
                    <div className={styles.ticketBody}>
                      <section className={styles.ticketSection}>
                        <p><strong className={styles.lastname}>{lastname}</strong> {firstname}{lastname ? ',' : ''}</p>
                      </section>
                      <section className={styles.ticketSection}>
                        <h3>Intéressé par le pack :</h3>
                        <p><span>{nameForPack}</span></p>
                      </section>
                      <section className={styles.ticketSection}>
                        <h3>Plus précisément par {myIndex === 0 ? 'l\'aide' : 'le service'} :</h3>
                        <span>{selectServiceForFormContact ? selectServiceForFormContact : ''}</span>
                      </section>
                    </div>
                    <div className={styles.ticketDivider}>
                      <div className={styles.ticketNotch}></div>
                      <div className={`${styles.ticketNotch} ${styles.ticketNotchRight}`}></div>
                    </div>
                    <footer className={styles.ticketFooter}>
                      <p>Prix</p>
                      {
                        selectServiceForFormContact ? (
                          <p className={styles.ticketFooterPrice}>
                            <CountUp end={services.price} suffix=" €" decimals={2} decimal="," className={styles.ticketFooterPrice} /> <span>*</span>
                          </p>
                        ) : ''
                      }
                    </footer>
                    <p className={styles.ticketPriceInfo}>* Le prix indiqué, n&apos;est pas le prix réel ! Il ne peut l&apos;être qu&apos;après devis !</p>
                  </article>
                </div>
              )
            } */}
          </div>
          {/* <form className={styles.form} onSubmit={handleSubmit}>
            <Field type="text" name="lastname" value={lastname} onChange={handleChange} />
            <Field type="text" name="firstname" value={firstname} onChange={handleChange} />
            <Field type="email" name="email" value={email} onChange={handleChange} />
            <Field type="tel" name="telephone" maxlength={10} value={telephone} onChange={handleChange} />
            <Field type="text" name="city" value={city} onChange={handleChange} />
            <Field type="number" name="zipCode" value={zipCode} onChange={handleChange} />
            <fieldset>
              <legend className={`${styles.labelMain} ${styles.cent}`}>Par quel pack êtes-vous intéressé ? <NavLink href="/services" className={styles.backToPrestations} title='Cliquez ici pour revoir les packs'>Cliquez ici pour revoir les packs</NavLink></legend>
              <div className={styles.selectPackForFormContact}>
                {
                  categories.map((category, index) => (
                    <div key={category + index}>
                      <h2 className={styles.selectPackForFormContactTitle} onClick={() => toggle(index)}>
                        {category === "Aides" ? <GiShakingHands /> : <GiToolbox />}
                        Les {category}
                      </h2>
                      <div className={styles.selectPackForFormContactBox}>
                        {
                          packs.map((pack: Packs) => (
                            pack.name.match(/Aide/i) && index === 0 ? (
                              <label key={pack._id} htmlFor={pack.name} className={nameForPack === pack.name ? `${styles.labelRadio} ${styles.isChecked}` : styles.labelRadio}>
                                {pack.name}
                                <input id={pack.name} type="radio" name="selectPackForFormContact" value={pack._id} onChange={handleChangeInt} />
                              </label>
                            ) : pack.name.match(/Service/i) && index === 1 ? (
                              <label key={pack._id} htmlFor={pack.name} className={selectPackForFormContact === pack.name ? `${styles.labelRadio} ${styles.isChecked}` : styles.labelRadio}>
                                {pack.name}
                                <input id={pack.name} type="radio" name="selectPackForFormContact" value={pack._id} onChange={handleChangeInt} />
                              </label>
                            ) : ''
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </fieldset>
            {
              selectPackForFormContact && (
                <fieldset>
                  <legend className={`${styles.labelMain} ${styles.cent}`}>Précisément par quelle {myIndex === 0 ? 'aide' : 'service'} ? <NavLink href="/services" className={styles.backToPrestations} title={`Cliquez ici pour revoir les ${myIndex === 0 ? 'aide' : 'service'}`}>Cliquez ici pour revoir les {myIndex === 0 ? 'aide' : 'service'}</NavLink></legend>
                  {
                    services.map((service: Services, index: any) => (
                      selectPackForFormContact === service.packsId  ? (
                        <label key={service._id} htmlFor={service.name} className={selectServiceForFormContact === service.name ? `${styles.labelRadio} ${styles.isChecked}` : styles.labelRadio}>
                          {service.name}
                          <input id={service.name} type="radio" className={service._id} name="selectFormuleForFormContact" value={service.name} onChange={handleChangeText} />
                        </label>
                      ) : ''
                    ))
                  }
                </fieldset>
              )
            }
            {
              selectPackForFormContact && (
                <>
                  <label htmlFor="details" className={`${styles.labelMain} ${styles.cent}`}>
                    Détailler votre demande, elle sera valider ou modifer après devis sur place.
                    <textarea name="details" id="details" className={styles.inputMain} rows={5} value={details} onChange={handleChangeDetails}></textarea>
                  </label>
                  <button type="submit">Envoyer <FaPaperPlane /></button>
                </>
              )
            }
          </form> */}
        </div>
      </LayoutPage>
    </Layout>
  )
}