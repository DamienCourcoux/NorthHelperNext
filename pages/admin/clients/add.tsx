import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../components/Admin/layoutAdmin';
import Loader from '../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleChangeClient, handleTextareaChangeClient, handleCloseModalClient, handleAddClientSucces, handleSelectChangeClient } from '../../../redux/reducer/reducerAdminClient';
import { addClient } from '../../../lib/requestApiClients';
import { getPacks } from '../../../lib/requestApiPacks';
import { getServices } from '../../../lib/requestApiServices';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../components/Field/field';
import stylesField from '../../../components/Field/field.module.css';

type Packs = {
    _id: number;
    name: string;
    servicesId: string;
    formulesId: string;
}

type Services = {
    _id: number;
    name: string;
    example: string;
    price: number;
    priceDetails: string;
    packsId: number;
}

export default function AddClientAdmin() {
    const lastname = useSelector((state: any) => state.adminClient.lastname);
    const firstname = useSelector((state: any) => state.adminClient.firstname);
    const email = useSelector((state: any) => state.adminClient.email);
    const telephone = useSelector((state: any) => state.adminClient.telephone);
    const city = useSelector((state: any) => state.adminClient.city);
    const zipCode = useSelector((state: any) => state.adminClient.zipCode);
    const desiredService = useSelector((state: any) => state.adminClient.desiredService);
    const details = useSelector((state: any) => state.adminClient.details);

    const dispatch = useDispatch();
    const router = useRouter();

    const { isLoading: isLoadingPacks, isError: isErrorPacks, data: packs, error: errorPacks } = useQuery<Packs[] | any>('packs', getPacks);

    const { isLoading: isLoadingServices, isError: isErrorServices, data: services, error: errorServices } = useQuery<Services[] | any>('services', getServices);


    if (isLoadingPacks) return <Loader message='Les packs chargent...' />;
    if (isErrorPacks) return <div>J&apos;ai eu une erreur {`${errorPacks}`}</div>;

    if (isLoadingServices) return <Loader message='Les services chargent...' />;
    if (isErrorServices) return <div>J&apos;ai eu une erreur {`${errorServices}`}</div>;

    const notify = () => toast.success(`${lastname} ${firstname} ajouté avec succès`, { icon: <FaCheckCircle className='checkToast' /> });
    const notifyLastnameError = () => toast.error(`Tu n'as pas écris de nom`);
    const notifyFirstnameError = () => toast.error(`Tu n'as pas écris de prénom`);
    const notifyTelephoneError = () => toast.error(`Erreur, tu as écris du texte au lieux d'un numéro pour le téléphone`);
    const notifySelectError = () => toast.error(`Tu n'as pas sélectionner le service désiré`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northhelper') {
            router.push('/admin/clients');
            dispatch(handleCloseModalClient());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (lastname === '') {
            notifyLastnameError();
        } else if (firstname === '') {
            notifyFirstnameError();
        } else if (isNaN(telephone)) {
            notifyTelephoneError();
        } else if (desiredService === '') {
            notifySelectError();
        } else {
            const formData = {
                lastname,
                firstname,
                email,
                telephone,
                city,
                zipCode,
                desiredService,
                details
            }
            const json = await addClient(formData);
            if (json) {
                dispatch(handleAddClientSucces());
                router.push('/admin/clients');
                notify();
            }
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangeClient(payload));
    };

    const handleSelectChange = (e: any) => {
        const payload = { name: e.target.name, target: e.target.value }
        dispatch(handleSelectChangeClient(payload));
    };

    const handleTextareaChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleTextareaChangeClient(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Helper | Admin - Ajouter un client +</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Ajouter un client +</h2>
                    <span className="closed northhelper">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm addElement two" onSubmit={handleSubmit}>
                        <Field type="text" name="lastname" value={lastname} onChange={handleChange} />
                        <Field type="text" name="firstname" value={firstname} onChange={handleChange} />
                        <Field type="email" name="email" value={email} onChange={handleChange} />
                        <Field type="tel" name="telephone" value={telephone} onChange={handleChange} />
                        <Field type="text" name="city" value={city} onChange={handleChange} />
                        <Field type="number" name="zip_code" value={zipCode === 0 ? '' : zipCode} onChange={handleChange} />
                        <label htmlFor="service" className={`${stylesField.label} ${stylesField.fullSize}`}>
                            Service désiré ?
                            <select name="desiredService" id="service" className={stylesField.input} onChange={handleSelectChange}>
                                <option value="">--Choisir le service désiré--</option>
                                {
                                    services.map((service: Services) => (
                                        <optgroup key={service._id} label={service.name}>
                                            <option key={service._id} value={service._id}>{service.name}</option>
                                        </optgroup>
                                    ))
                                }
                            </select>
                        </label>
                        {/* TODO le textarea marche pas */}
                        {/* <label htmlFor="details" className={`${stylesField.label} ${stylesField.fullSize}`}>
                            Détails
                            <textarea className={stylesField.input} name="details" id="details" rows={5} value={details} onChange={handleTextareaChange}></textarea>
                        </label> */}
                        <button className="containerFormFormButton" type="submit">Valider</button>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    )
}