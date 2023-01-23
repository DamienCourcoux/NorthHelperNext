import Head from 'next/head';
import LayoutAdmin from '../../components/Admin/layoutAdmin';
import NavLink from '../../components/navlink';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../../components/Loader/loader';
import { useQuery } from 'react-query';

import { getServices } from '../../lib/requestApiServices';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

type Services = {
    _id: number;
    name: string;
    example: string;
    price: number;
    priceDetails: string;
    packsId: number;
}

export default function ServicesAdmin() {
    const { isLoading, isError, data, error } = useQuery<Services[] | any>('services', getServices);
    if (isLoading) return <Loader message='Les services chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <LayoutAdmin>
            <Head>
                <title>North Helper | Admin - Services</title>
            </Head>
            <section className='elementsAdmin'>
                <div className="elementsAdminHead">
                    <h1 className="elementsAdminHeadTitle northhelper">
                        Services <em>(<CountUp end={data.length} />)</em>
                    </h1>
                    <NavLink href="/admin/services/add" className="elementsAdminHeadAdd" title="Ajouter une service +">Ajouter une service +</NavLink>
                </div>
                <div className="elementsAdminContainer">
                    {
                        data.map((service: Services, index: number) => (
                            <div className="card" key={service._id}>
                                <div className="cardBox">
                                    <div className="cardBoxContent">
                                        <span className="numero">
                                            {index + 1 < 10 ? <CountUp end={index + 1} prefix="0" /> : <CountUp end={index + 1} />}
                                        </span>
                                        <p className='name'>
                                            {service.name}
                                        </p>
                                        <div className="info">
                                            <p>{service.example === null || service.example === '' ? '' : service.example}</p>
                                            <p className="price"><CountUp end={service.price} suffix=" €" /></p>
                                            <p>{service.priceDetails === null || service.priceDetails === '' ? '' : service.priceDetails}</p>
                                        </div>
                                        <div className="buttons">
                                            <i className='button buttonEdit'>
                                                <NavLink href={`/admin/services/edit/${service._id}`} title="Modifier la service">
                                                    <FaEdit />
                                                </NavLink>
                                            </i>
                                            {
                                                data.length > 1 ?
                                                    <i className='button buttonDelete'>
                                                        <NavLink href={`/admin/services/delete/${service._id}`} title="Supprimer la service">
                                                            <FaTrashAlt />
                                                        </NavLink>
                                                    </i> : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </LayoutAdmin>
    )
}