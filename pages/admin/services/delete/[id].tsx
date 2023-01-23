import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalService, handleDeleteServiceSucces } from '../../../../redux/reducer/reducerAdminService';
import { getService, deleteService } from '../../../../lib/requestApiServices';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

type Services = {
    _id: number;
    name: string;
    example: string;
    price: number;
    priceDetails: string;
    packsId: string;
}

export default function DeleteServiceAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingService, isError: isErrorService, data: service, error: errorService } = useQuery<Services[] | any>('service', () => getService(id));

    if (isLoadingService) return <Loader message="La service charge..." />;
    if (isErrorService) return <div>J&apos;ai eu une erreur {`${errorService}`}</div>;


    const notifyService = () => toast.success("La service est supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    const handleDeleteService = async (id: any) => {
        const json = await deleteService(id);
        if (json) {
            dispatch(handleDeleteServiceSucces());
            router.push('/admin/services');
            notifyService();
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northhelper' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalService());
            router.push('/admin/services');
        }
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Helper | Admin - Supprimer un service</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="modalDelete">
                    <div className="modalDeleteHead">
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> le service <span className='informationDelete'>&quot;{service.name}&quot;</span></h2>
                        <span className="closed northhelper">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northhelper icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeleteService(service._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}