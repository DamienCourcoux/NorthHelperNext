import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleChangeService, handleSelectChangeService, handleCloseModalService, handleEditServiceSucces } from '../../../../redux/reducer/reducerAdminService';
import { updateService } from '../../../../lib/requestApiServices';
import { getPacks } from '../../../../lib/requestApiPacks';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../../components/Field/field';
import stylesField from '../../../../components/Field/field.module.css';

type Packs = {
    _id: number;
    name: string;
    prestationsId: string;
    formulesId: string;
}

export default function EditServiceAdmin() {
    const name = useSelector((state: any) => state.adminService.name);
    const example = useSelector((state: any) => state.adminService.example);
    const price = useSelector((state: any) => state.adminService.price);
    const priceDetails = useSelector((state: any) => state.adminService.priceDetails);
    const packsId = useSelector((state: any) => state.adminService.packsId);

    const dispatch = useDispatch();
    const router = useRouter();

    const { isLoading, isError, data, error } = useQuery<Packs[] | any>('packs', getPacks);
    if (isLoading) return <Loader message='Les packs chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    const notify = () => toast.success(`La prestation est modifié avec succès`, { icon: <FaCheckCircle className='checkToast' /> });

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northhelper') {
            router.push('/admin/prestations');
            dispatch(handleCloseModalService());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { id } = router.query as any;
        const formData = {
            name,
            example,
            price,
            priceDetails,
            packsId
        }
        const json = await updateService(id, formData);
        if (json) {
            dispatch(handleEditServiceSucces());
            router.push('/admin/services');
            notify();
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangeService(payload));
    };

    const handleSelectChange = (e: any) => {
        const payload = { name: e.target.name, target: e.target.value }
        dispatch(handleSelectChangeService(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Helper | Admin - Modifier un service</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Modifier un service</h2>
                    <span className="closed northhelper">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm addElement" onSubmit={handleSubmit}>
                        <Field type="text" name="name" value={name} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="example" value={example} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="number" min="1" name="price" value={price} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="priceDetails" value={priceDetails} placeholder="non renseigné" onChange={handleChange} />
                        <label htmlFor="packs" className={stylesField.label}>
                            Associer à quel pack ?
                            <select name="packsId" id="packs" className={stylesField.input} onChange={handleSelectChange}>
                                {
                                    data.map((pack: Packs) => (
                                        <option key={pack._id} value={pack._id}>{pack.name}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <button className="containerFormFormButton" type="submit">Valider</button>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    )
}